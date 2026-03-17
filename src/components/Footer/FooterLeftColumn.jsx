import logoSmall from "assets/logo-small.svg";
import { SocialLinks } from "components/SocialLinks";

export function FooterLeftColumn() {
    return (
        <div className="max-w-sm">
            <img
                className="h-12 w-auto"
                src={logoSmall}
                alt="Little Lemon logo"
            />

            <p className="mt-6 text-sm leading-6 text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <SocialLinks className="mt-6" />
        </div>
    );
}
