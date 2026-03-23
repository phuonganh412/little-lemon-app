import { HeroSection } from "components/HeroSection";
import { HighLightSection } from "components/HighLightSection";
import { TestimonialsSection } from "components/TestimonialsSection";

export function Main() {
    return (
        <main className="w-full">
            <HeroSection />
            <HighLightSection />
            <TestimonialsSection />
        </main>
    );
}
