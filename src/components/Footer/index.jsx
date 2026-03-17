import logoSmall from "assets/logo-small.svg";
import { NavVertical } from "components/NavVertical";
import { routes } from "constants/routes";
import { socialLinks } from "constants/socialLinks";

function SocialLink({ label, href, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
            {children}
        </a>
    );
}

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

                <div>
                    <h3 className="text-sm font-extrabold tracking-widest text-white">
                        NAVIGATION
                    </h3>
                    <NavVertical className="mt-5" routes={routes} />
                </div>

                <div>
                    <h3 className="text-sm font-extrabold tracking-widest text-white">
                        HOURS
                    </h3>
                    <div className="mt-5 space-y-5 text-sm leading-6 text-white/80">
                        <div>
                            <p className="font-medium text-white">
                                Monday - Friday
                            </p>
                            <p>8am - 10pm</p>
                        </div>
                        <div>
                            <p className="font-medium text-white">
                                Saturday &amp; Sunday
                            </p>
                            <p>10am - 4pm</p>
                        </div>
                        <div>
                            <p className="font-medium text-white">
                                Online Ordering
                            </p>
                            <p>11am - 9pm</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-extrabold tracking-widest text-white">
                        ADDRESS
                    </h3>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
                        <li>Address here...</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
