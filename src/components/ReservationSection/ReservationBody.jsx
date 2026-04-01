import reservationBgImg from "assets/reservation-bg.png";
import { useNavigate } from "react-router-dom";
import { ReservationForm } from "../ReservationForm";

export function ReservationBody({ children }) {
    const navigate = useNavigate();

    return (
        <section
            aria-label="Reservation body section"
            className="w-full bg-cover bg-center bg-no-repeat py-16 md:py-20"
            style={{
                backgroundImage: `url(${reservationBgImg})`,
                minHeight: "900px",
            }}
        >
            <div className="mx-auto w-full max-w-6xl px-6">
                {children ?? (
                    <ReservationForm
                        onSuccess={() =>
                            navigate("/reservation/confirmed", { replace: true })
                        }
                    />
                )}
            </div>
        </section>
    );
}
