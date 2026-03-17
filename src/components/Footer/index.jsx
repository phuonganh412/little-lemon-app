import logoSmall from "assets/logo-small.svg";
import { NavVertical } from "components/NavVertical";
import { routes } from "constants/routes";
import { socialLinks } from "constants/socialLinks";

function SocialLink({ label, href, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 transition-colors hover:text-white"
        >
            {children}
        </a>
    );
}

function FooterSection({ title, children }) {
    return (
        <div>
            <h3 className="text-sm font-extrabold tracking-widest text-white">
                {title}
            </h3>
            <div className="mt-5">{children}</div>
        </div>
    );
}

const footerSections = [
    {
        title: "NAVIGATION",
        type: "nav",
    },
    {
        title: "HOURS",
        type: "hours",
        items: [
            { label: "Monday - Friday", value: "8am - 10pm" },
            { label: "Saturday & Sunday", value: "10am - 4pm" },
            { label: "Online Ordering", value: "11am - 9pm" },
        ],
    },
    {
        title: "ADDRESS",
        type: "address",
        items: ["Address here...", "Phone number", "Email"],
    },
];

export function Footer() {
    return (
        <footer className="bg-[#495E57] text-left text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
                {/* LEFT COLUMN */}
                <div className="max-w-sm">
                    <img
                        className="h-12 w-auto"
                        src={logoSmall}
                        alt="Little Lemon logo"
                    />

                    <p className="mt-6 text-sm leading-6 text-white/80">
                        lorem ipsum blah blah blah blah blah here on several
                        lines of course ...
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <SocialLink key={label} label={label} href={href}>
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </SocialLink>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMNS*/}
                {footerSections.map((section) => (
                    <FooterSection key={section.title} title={section.title}>
                        {/* NAV */}
                        {section.type === "nav" && (
                            <NavVertical routes={routes} />
                        )}

                        {/* HOURS */}
                        {section.type === "hours" && (
                            <div className="space-y-5 text-sm leading-6 text-white/80">
                                {section.items.map((item) => (
                                    <div key={item.label}>
                                        <p className="font-medium text-white">
                                            {item.label}
                                        </p>
                                        <p>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* ADDRESS */}
                        {section.type === "address" && (
                            <ul className="space-y-3 text-sm leading-6 text-white/80">
                                {section.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </FooterSection>
                ))}
            </div>
        </footer>
    );
}
