import { HeroSection } from "components/HeroSection";
import { HighLightSection } from "components/HighLightSection";
import { TestimonialsSection } from "components/TestimonialsSection";
import { AboutSection } from "components/AboutSection";

export function Main() {
    return (
        <main className="w-full">
            <HeroSection />
            <HighLightSection />
            <TestimonialsSection />
            <AboutSection />
        </main>
    );
}
