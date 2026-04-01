import { ReservationHero } from "components/ReservationSection/ReservationHero";
import { ReservationBody } from "components/ReservationSection/ReservationBody";
import { PageLayout } from "components/PageLayout";

export function ReservationPage() {
    return (
        <PageLayout>
            <ReservationHero />
            <ReservationBody />
        </PageLayout>
    );
}
