import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";

import { SocialLinkItem } from "components/SocialLinks/SocialLinkItem";

const SOCIAL_LINKS = [
    { label: "Facebook", href: "#", icon: FaFacebookF },
    { label: "Instagram", href: "#", icon: FaInstagram },
    { label: "X", href: "#", icon: FaXTwitter },
    { label: "YouTube", href: "#", icon: FaYoutube },
];

export function SocialLinks({ className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {SOCIAL_LINKS.map((item) => (
                <SocialLinkItem key={item.label} {...item} />
            ))}
        </div>
    );
}
