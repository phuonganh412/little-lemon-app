import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ReservationHero } from "./ReservationHero";
import { ReservationBody } from "./ReservationBody";

export function Reservation() {
    return (
        <div className="App">
            <Header />
            <ReservationHero />
            <ReservationBody />
            <Footer />
        </div>
    );
}
