import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ReservationHero } from "components/ReservationSection/ReservationHero";
import { ReservationBody } from "components/ReservationSection/ReservationBody";

export function ReservationPage() {
    return (
        <div className="App">
            <Header />
            <ReservationHero />
            <ReservationBody />
            <Footer />
        </div>
    );
}
