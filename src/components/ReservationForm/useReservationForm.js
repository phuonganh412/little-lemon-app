import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAPI, submitAPI } from "api/capstoneApi";

const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
};

/** Maps API time strings like `"17:00"` to labels like `"5:00 PM"`. */
function formatApiTimeToLabel(apiTime) {
    const parts = String(apiTime).split(":");
    const hour = Number(parts[0]);
    const minute = Number(parts[1] ?? "0");

    if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
        return apiTime;
    }

    const ampm = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 === 0 ? 12 : hour % 12;
    const minStr = String(minute).padStart(2, "0");

    return `${h12}:${minStr} ${ampm}`;
}

export const guestOptions = Array.from({ length: 10 }, (_, index) => ({
    value: String(index + 1),
    label: String(index + 1),
}));

export const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "Anniversary" },
    { value: "engagement", label: "Engagement" },
    { value: "other", label: "Other" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s-]{8,15}$/;

function startOfLocalToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/** Parses `<input type="date">` value into start-of-day local Date, or null if invalid. */
function parseLocalDateFromDateInput(trimmedValue) {
    const parts = trimmedValue.split("-");
    if (parts.length !== 3) return null;

    const y = Number(parts[0]);
    const m = Number(parts[1]);
    const d = Number(parts[2]);

    if (![y, m, d].every((n) => Number.isInteger(n))) return null;

    const parsed = new Date(y, m - 1, d);
    if (
        parsed.getFullYear() !== y ||
        parsed.getMonth() !== m - 1 ||
        parsed.getDate() !== d
    ) {
        return null;
    }

    return parsed;
}

function validateField(name, value) {
    const trimmedValue = typeof value === "string" ? value.trim() : "";

    switch (name) {
        case "fullName":
            if (trimmedValue === "") return "Full name is required.";
            if (trimmedValue.length < 2)
                return "Full name must be at least 2 characters.";
            return "";
        case "email":
            if (trimmedValue === "") return "Email is required.";
            if (!EMAIL_REGEX.test(trimmedValue))
                return "Please enter a valid email.";
            return "";
        case "phone":
            if (trimmedValue === "") return "Phone number is required.";
            if (!PHONE_REGEX.test(trimmedValue)) {
                return "Please enter a valid phone number.";
            }
            return "";
        case "date": {
            if (trimmedValue === "") return "Reservation date is required.";
            const selectedDate = parseLocalDateFromDateInput(trimmedValue);
            if (!selectedDate) {
                return "Please enter a valid reservation date.";
            }
            if (selectedDate < startOfLocalToday()) {
                return "Reservation date cannot be in the past.";
            }
            return "";
        }
        case "time":
            if (trimmedValue === "") return "Reservation time is required.";
            return "";
        case "guests":
            if (trimmedValue === "") return "Number of guests is required.";
            return "";
        case "occasion":
            if (trimmedValue === "") return "Please choose an occasion.";
            return "";
        default:
            return "";
    }
}

function validateForm(values) {
    return Object.keys(values).reduce((accumulator, key) => {
        const error = validateField(key, values[key]);

        if (error) {
            accumulator[key] = error;
        }

        return accumulator;
    }, {});
}

/**
 * Send reservation via capstone `submitAPI`. On failure, reject so the
 * form stays filled and the user can retry without retyping.
 */
export async function submitReservation(values) {
    const ok = submitAPI(values);

    if (ok === false) {
        throw new Error("Reservation failed");
    }
}

export function useReservationForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [availableTimeOptions, setAvailableTimeOptions] = useState([]);

    useEffect(() => {
        const trimmedDate =
            typeof values.date === "string" ? values.date.trim() : "";

        if (trimmedDate === "") {
            setAvailableTimeOptions([]);
            setValues((previous) =>
                previous.time ? { ...previous, time: "" } : previous,
            );
            return;
        }

        const parsedDate = parseLocalDateFromDateInput(trimmedDate);

        if (!parsedDate) {
            setAvailableTimeOptions([]);
            setValues((previous) =>
                previous.time ? { ...previous, time: "" } : previous,
            );
            return;
        }

        const slots = fetchAPI(parsedDate);
        const list = Array.isArray(slots) ? slots : [];

        const nextOptions = list.map((slot) => ({
            value: String(slot),
            label: formatApiTimeToLabel(slot),
        }));

        setAvailableTimeOptions(nextOptions);
        setValues((previous) => ({ ...previous, time: "" }));
    }, [values.date]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((previousValues) => ({
            ...previousValues,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((previousErrors) => ({
                ...previousErrors,
                [name]: validateField(name, value),
            }));
        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formErrors = validateForm(values);
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
            return;
        }

        try {
            await submitReservation(values);
        } catch {
            return;
        }

        navigate("/reservation/confirmed", { replace: true });

        queueMicrotask(() => {
            setValues(initialValues);
            setErrors({});
        });
    };

    return {
        values,
        errors,
        availableTimeOptions,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
