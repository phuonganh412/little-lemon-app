import { Hero } from "components/Hero";

export function Main() {
    return (
        <main className="w-full">
            <Hero />
            <section className="bg-white" aria-hidden="true">
                <div className="mx-auto max-w-6xl px-6 py-20" />
            </section>
        </main>
    );
}
