import { HeroSection } from "components/HeroSection";
import { HighLightSection } from "components/HighLightSection";

export function Main() {
    return (
        <main className="w-full">
            <HeroSection />
            <HighLightSection />
            <section className="bg-white" aria-hidden="true">
                <div className="mx-auto max-w-6xl px-6 py-20" />
            </section>
        </main>
    );
}
