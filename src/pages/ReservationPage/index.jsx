import reservationBgImg from "assets/reservation-bg.png";
import { ReservationForm } from "components/ReservationForm";
import { ReservationHero } from "components/ReservationSection/ReservationHero";
import { PageLayout } from "components/PageLayout";

export function ReservationPage() {
    return (
        <PageLayout>
            <ReservationHero />
            <section
                aria-label="Reservation body section"
                className="w-full bg-cover bg-center bg-no-repeat py-16 md:py-20"
                style={{
                    backgroundImage: `url(${reservationBgImg})`,
                    minHeight: "900px",
                }}
            >
                <div className="mx-auto w-full max-w-6xl px-6">
                    <ReservationForm />
                </div>
            </section>
        </PageLayout>
    );
}
