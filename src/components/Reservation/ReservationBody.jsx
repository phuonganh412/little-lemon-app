import reservationBgImg from "assets/reservation-bg.png";

export function ReservationBody() {
    return (
        <section
            aria-label="Reservation body section"
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${reservationBgImg})`, minHeight: "900px" }}
        />
    );
}
