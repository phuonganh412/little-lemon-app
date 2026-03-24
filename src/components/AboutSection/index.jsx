import { AboutText } from "./AboutText";
import { aboutConfig } from "./about.config";

const headingId = "about-heading";

export function AboutSection() {
    const [primaryImage, secondaryImage] = aboutConfig.images;

    return (
        <section
            className="bg-white py-20"
            aria-labelledby={headingId}
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-12 md:flex-row md:items-center md:justify-between md:gap-16">
                <div className="relative w-full max-w-md shrink-0 pb-16 md:pb-20">
                    <img
                        className="ml-auto block h-80 w-4/5 rounded-2xl object-cover shadow-lg sm:h-96"
                        src={primaryImage.src}
                        alt={primaryImage.alt}
                    />
                    <img
                        className="absolute bottom-0 left-0 w-3/5 rounded-2xl object-cover shadow-xl ring-4 ring-white"
                        src={secondaryImage.src}
                        alt={secondaryImage.alt}
                    />
                </div>

                <AboutText
                    title={aboutConfig.title}
                    subtitle={aboutConfig.subtitle}
                    paragraphs={aboutConfig.paragraphs}
                    headingId={headingId}
                />
            </div>
        </section>
    );
}
