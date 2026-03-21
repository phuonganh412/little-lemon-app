import heroImg from "assets/hero-img.jpg";

export function HeroSection() {
    return (
        <section
            aria-labelledby="hero-title"
            className="bg-[#495E57] text-left text-white"
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                    <h1
                        id="hero-title"
                        className="text-5xl font-extrabold tracking-tight text-[#F4CE14] sm:text-6xl"
                    >
                        Little Lemon
                    </h1>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Chicago
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-7 text-white/80">
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>

                    <a
                        href="/reservations"
                        className="mt-10 inline-flex items-center justify-center rounded-full bg-[#F4CE14] px-7 py-3 font-medium text-gray-900 shadow-sm transition-colors hover:bg-[#e3b913]"
                    >
                        Reserve a Table
                    </a>
                </div>

                <div className="relative z-10 md:w-[420px] md:translate-y-10 md:-mb-16 lg:w-[480px]">
                    <img
                        className="h-64 w-full rounded-2xl object-cover shadow-xl md:h-80"
                        src={heroImg}
                        alt="Little Lemon featured dishes"
                    />
                </div>
            </div>
        </section>
    );
}
