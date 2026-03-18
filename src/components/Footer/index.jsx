import logoSmall from "assets/logo-small.svg";
import { SocialLinks } from "components/SocialLinks";

import { FooterComponentContent } from "./FooterComponentContent";
import { footerConfig } from "./footer.config";

export function Footer() {
    return (
        <footer className="bg-[#495E57] text-left text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
                <div className="max-w-sm">
                    <img
                        className="h-12 w-auto"
                        src={logoSmall}
                        alt="Little Lemon logo"
                    />

                    <p className="mt-6 text-sm leading-6 text-white/80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>

                    <SocialLinks className="mt-6" />
                </div>

                {footerConfig.map((section) => (
                    <FooterComponentContent key={section.type} {...section} />
                ))}
            </div>
        </footer>
    );
}
