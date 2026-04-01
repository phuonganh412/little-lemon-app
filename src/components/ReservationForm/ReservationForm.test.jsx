import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as capstoneApi from "api/capstoneApi";
import { ReservationForm } from "./index";

// Helper: `<input type="date">` value for a date one week ahead (local calendar)
function getFutureDate() {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

// Helper to fill in all required fields with valid data
async function fillFormValid() {
    const futureDate = getFutureDate();

    await userEvent.type(screen.getByLabelText(/full name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/phone/i), "1234567890");
    await userEvent.type(screen.getByLabelText(/select the date/i), futureDate);
    await waitFor(() => {
        expect(
            within(screen.getByLabelText(/choose the time/i)).getByRole(
                "option",
                { name: /5:00 PM/i },
            ),
        ).toBeInTheDocument();
    });
    await userEvent.selectOptions(
        screen.getByLabelText(/choose the time/i),
        "17:00",
    );
    await userEvent.selectOptions(
        screen.getByLabelText(/specify the number of guests/i),
        "2",
    );
    await userEvent.selectOptions(
        screen.getByLabelText(/special occasion/i),
        "birthday",
    );
}

describe("ReservationForm", () => {
    beforeEach(() => {
        jest.spyOn(capstoneApi, "fetchAPI").mockImplementation(() => [
            "17:00",
            "18:00",
            "21:00",
        ]);
        jest.spyOn(capstoneApi, "submitAPI").mockImplementation(() => true);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    // ─── Rendering ───────────────────────────────────────────
    test("renders all form fields and submit button", () => {
        render(<ReservationForm />);

        expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/select the date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose the time/i)).toBeInTheDocument();
        expect(
            screen.getByLabelText(/specify the number of guests/i),
        ).toBeInTheDocument();
        expect(screen.getByLabelText(/special occasion/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /book now/i }),
        ).toBeInTheDocument();
    });

    test("renders the intro card text", () => {
        render(<ReservationForm />);

        expect(
            screen.getByText(/reserve a table at our restaurant/i),
        ).toBeInTheDocument();
    });

    test("does not show success banner initially", () => {
        render(<ReservationForm />);

        expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });

    // ─── Validation (empty submit) ──────────────────────────
    test("shows validation errors when submitting an empty form", async () => {
        render(<ReservationForm />);

        await userEvent.click(
            screen.getByRole("button", { name: /book now/i }),
        );

        const alerts = screen.getAllByRole("alert");
        expect(alerts.length).toBeGreaterThanOrEqual(6);

        expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(
            screen.getByText(/phone number is required/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/reservation date is required/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/reservation time is required/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/number of guests is required/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/please choose an occasion/i),
        ).toBeInTheDocument();
    });

    test("does not show success banner on failed submission", async () => {
        render(<ReservationForm />);

        await userEvent.click(
            screen.getByRole("button", { name: /book now/i }),
        );

        expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });

    // ─── Field-level validation ─────────────────────────────
    test("shows error when full name is too short", async () => {
        render(<ReservationForm />);

        const input = screen.getByLabelText(/full name/i);
        await userEvent.type(input, "A");
        await userEvent.tab();

        expect(
            screen.getByText(/full name must be at least 2 characters/i),
        ).toBeInTheDocument();
    });

    test("shows error for invalid email format", async () => {
        render(<ReservationForm />);

        const input = screen.getByLabelText(/email/i);
        await userEvent.type(input, "not-an-email");
        await userEvent.tab();

        expect(
            screen.getByText(/please enter a valid email/i),
        ).toBeInTheDocument();
    });

    test("shows error for invalid phone number", async () => {
        render(<ReservationForm />);

        const input = screen.getByLabelText(/phone/i);
        await userEvent.type(input, "abc");
        await userEvent.tab();

        expect(
            screen.getByText(/please enter a valid phone number/i),
        ).toBeInTheDocument();
    });

    // ─── Error clearing on change ───────────────────────────
    test("clears error for a field when user corrects the value", async () => {
        render(<ReservationForm />);

        const input = screen.getByLabelText(/full name/i);
        await userEvent.type(input, "A");
        await userEvent.tab();

        expect(
            screen.getByText(/full name must be at least 2 characters/i),
        ).toBeInTheDocument();

        await userEvent.clear(input);
        await userEvent.type(input, "John Doe");

        expect(
            screen.queryByText(/full name must be at least 2 characters/i),
        ).not.toBeInTheDocument();
    });

    // ─── Successful submission ──────────────────────────────
    test("shows success banner after valid submission", async () => {
        render(<ReservationForm />);

        await fillFormValid();
        await userEvent.click(
            screen.getByRole("button", { name: /book now/i }),
        );

        expect(await screen.findByRole("status")).toBeInTheDocument();
        expect(
            screen.getByText(/reservation submitted successfully/i),
        ).toBeInTheDocument();
    });

    test("resets form fields after successful submission", async () => {
        render(<ReservationForm />);

        await fillFormValid();
        await userEvent.click(
            screen.getByRole("button", { name: /book now/i }),
        );

        expect(await screen.findByRole("status")).toBeInTheDocument();
        expect(screen.getByLabelText(/full name/i)).toHaveValue("");
        expect(screen.getByLabelText(/email/i)).toHaveValue("");
        expect(screen.getByLabelText(/phone/i)).toHaveValue("");
        expect(screen.getByLabelText(/choose the time/i)).toHaveValue("");
        expect(
            screen.getByLabelText(/specify the number of guests/i),
        ).toHaveValue("");
        expect(screen.getByLabelText(/special occasion/i)).toHaveValue("");
    });

    test("clears all error messages after successful submission", async () => {
        render(<ReservationForm />);

        // First, submit empty to trigger errors
        await userEvent.click(
            screen.getByRole("button", { name: /book now/i }),
        );
        expect(screen.getAllByRole("alert").length).toBeGreaterThanOrEqual(6);

        // Now fill form correctly and resubmit
        await fillFormValid();
        await userEvent.click(
            screen.getByRole("button", { name: /book now/i }),
        );

        expect(await screen.findByRole("status")).toBeInTheDocument();
        expect(screen.queryAllByRole("alert")).toHaveLength(0);
    });

    // ─── Select field options ───────────────────────────────
    test("time select only has placeholder until a date is chosen", () => {
        render(<ReservationForm />);

        const timeSelect = screen.getByLabelText(/choose the time/i);
        const options = within(timeSelect).getAllByRole("option");

        expect(options).toHaveLength(1);
    });

    test("loads time options from fetchAPI after a date is selected", async () => {
        render(<ReservationForm />);

        const timeSelect = screen.getByLabelText(/choose the time/i);
        await userEvent.type(
            screen.getByLabelText(/select the date/i),
            getFutureDate(),
        );

        await waitFor(() => {
            const options = within(timeSelect).getAllByRole("option");
            expect(options).toHaveLength(4);
        });

        expect(within(timeSelect).getByText("5:00 PM")).toBeInTheDocument();
        expect(within(timeSelect).getByText("6:00 PM")).toBeInTheDocument();
        expect(within(timeSelect).getByText("9:00 PM")).toBeInTheDocument();
    });

    test("renders correct guest options (1-10)", () => {
        render(<ReservationForm />);

        const guestSelect = screen.getByLabelText(
            /specify the number of guests/i,
        );
        const options = within(guestSelect).getAllByRole("option");

        // placeholder + 10 guest options
        expect(options).toHaveLength(11);
    });

    test("renders correct occasion options", () => {
        render(<ReservationForm />);

        const occasionSelect = screen.getByLabelText(/special occasion/i);
        const options = within(occasionSelect).getAllByRole("option");

        // placeholder + 4 occasions
        expect(options).toHaveLength(5);
        expect(
            within(occasionSelect).getByText("Birthday"),
        ).toBeInTheDocument();
        expect(
            within(occasionSelect).getByText("Anniversary"),
        ).toBeInTheDocument();
    });

    // ─── HTML5 attributes ───────────────────────────────────
    test("form has noValidate attribute", () => {
        render(<ReservationForm />);

        const submitButton = screen.getByRole("button", { name: /book now/i });
        expect(submitButton.form).toHaveAttribute("novalidate");
    });
});
