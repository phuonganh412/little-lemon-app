export function SocialLinkItem({ label, href, icon: Icon }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 transition-colors hover:text-white"
        >
            <Icon className="h-5 w-5" aria-hidden />
        </a>
    );
}
