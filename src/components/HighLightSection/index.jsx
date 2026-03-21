import { HighlightHeader } from "./HighlightHeader";
import { HightlightCarousel } from "./HightlightCarousel";

export const HighLightSection = () => {
    return (
        <section className="bg-[#e9e9eb] py-20">
            <div className="mx-auto max-w-7xl px-12">
                <HighlightHeader />
                <HightlightCarousel />
            </div>
        </section>
    );
};
