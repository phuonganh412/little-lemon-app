import { BookingSuccessIcon } from "components/BookingSuccessIcon";
import { PageLayout } from "components/PageLayout";
import { ReservationBody } from "components/ReservationSection/ReservationBody";
import { ReservationHero } from "components/ReservationSection/ReservationHero";

export function BookingConfirmedPage() {
    return (
        <PageLayout>
            <main>
                <ReservationHero
                    asPageTitle={false}
                    heading="Reservation confirmed"
                />
                <ReservationBody>
                    <div className="flex min-h-[min(760px,calc(100vh-24rem))] w-full items-center justify-center">
                        <div
                            className="max-w-xl rounded-2xl bg-[#495e57]/85 px-8 py-10 text-center text-white shadow-xl backdrop-blur-sm md:px-12 md:py-12"
                            role="status"
                        >
                            <BookingSuccessIcon />
                            <h1 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                                Your reservation has been confirmed!
                            </h1>
                            <p className="mt-4 text-lg text-white/95">
                                We look forward to welcoming you.
                            </p>
                            <p className="mt-6 text-sm text-white/80">
                                Feel free to review your reservation details in
                                the profile section.
                            </p>
                        </div>
                    </div>
                </ReservationBody>
            </main>
        </PageLayout>
    );
}
