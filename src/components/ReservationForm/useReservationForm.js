import { useState } from "react";

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

export const timeOptions = [
    { value: "17:00", label: "5:00 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "21:00", label: "9:00 PM" },
];

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
 * Send reservation to your backend. On network or HTTP errors, reject so the
 * form stays filled and the user can retry without retyping.
 */
export async function submitReservation(values) {
    // Example:
    // const response = await fetch("/api/reservations", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(values),
    // });
    // if (!response.ok) throw new Error("Reservation failed");
    await Promise.resolve();
}

export function useReservationForm() {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((previousValues) => ({
            ...previousValues,
            [name]: value,
        }));

        if (error[name]) {
            setError((previousError) => ({
                ...previousError,
                [name]: validateField(name, value),
            }));
        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;

        setError((previousError) => ({
            ...previousError,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formErrors = validateForm(values);
        setError(formErrors);

        if (Object.keys(formErrors).length > 0) {
            setIsSuccess(false);
            return;
        }

        try {
            await submitReservation(values);
        } catch {
            setIsSuccess(false);
            return;
        }

        setIsSuccess(true);
        setValues(initialValues);
        setError({});
    };

    return {
        values,
        error,
        isSuccess,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
