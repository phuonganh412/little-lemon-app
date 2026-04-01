import reservationHeroImg from "assets/reservation-hero.png";

const DEFAULT_HEADING = "Welcome to our restaurant reservation form!";

export function ReservationHero({
    heading = DEFAULT_HEADING,
    /** When false, the hero line is visual only; use a real h1 in page content below. */
    asPageTitle = true,
}) {
    const TitleTag = asPageTitle ? "h1" : "p";

    return (
        <section
            aria-label="Reservation hero section"
            className="flex h-[220px] w-full items-center bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${reservationHeroImg})`,
            }}
        >
            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center px-6">
                <TitleTag className="text-center text-5xl font-medium text-white">
                    {heading}
                </TitleTag>
            </div>
        </section>
    );
}
