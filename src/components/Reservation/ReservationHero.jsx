import reservationHeroImg from "assets/reservation-hero.png";

export function ReservationHero() {
    return (
        <section
            aria-label="Reservation hero section"
            className="flex h-[220px] w-full items-center bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${reservationHeroImg})`,
            }}
        >
            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center px-6">
                <h1 className="text-5xl font-medium text-white">
                    Welcome to our restaurant reservation form!
                </h1>
            </div>
        </section>
    );
}
