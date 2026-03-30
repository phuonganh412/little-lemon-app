export function ReservationSuccessBanner() {
    return (
        <p
            className="mb-8 rounded-lg bg-green-100 px-4 py-3 text-left text-lg font-medium text-green-800"
            role="status"
            aria-live="polite"
        >
            Reservation submitted successfully. We will contact you soon.
        </p>
    );
}
