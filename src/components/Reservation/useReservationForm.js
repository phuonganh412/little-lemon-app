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

function validateField(name, value) {
    const trimmedValue = typeof value === "string" ? value.trim() : value;

    switch (name) {
        case "fullName":
            if (!trimmedValue) return "Full name is required.";
            if (trimmedValue.length < 2)
                return "Full name must be at least 2 characters.";
            return "";
        case "email":
            if (!trimmedValue) return "Email is required.";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue))
                return "Please enter a valid email.";
            return "";
        case "phone":
            if (!trimmedValue) return "Phone number is required.";
            if (!/^\+?[0-9\s-]{8,15}$/.test(trimmedValue)) {
                return "Please enter a valid phone number.";
            }
            return "";
        case "date":
            if (!trimmedValue) return "Reservation date is required.";
            if (trimmedValue < new Date().toISOString().split("T")[0]) {
                return "Reservation date cannot be in the past.";
            }
            return "";
        case "time":
            if (!trimmedValue) return "Reservation time is required.";
            return "";
        case "guests":
            if (!trimmedValue) return "Number of guests is required.";
            return "";
        case "occasion":
            if (!trimmedValue) return "Please choose an occasion.";
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

export function useReservationForm() {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        const formErrors = validateForm(values);
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
            setIsSuccess(false);
            return;
        }

        setIsSuccess(true);
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        isSubmitted,
        isSuccess,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
