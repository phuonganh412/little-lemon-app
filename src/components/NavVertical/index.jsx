export function NavVertical({
    className = "",
    routes = [],
    ariaLabel = "Footer navigation",
}) {
    return (
        <nav className={className} aria-label={ariaLabel}>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {routes.map((route) => (
                    <li key={route.url}>
                        <a
                            className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white"
                            href={route.url}
                        >
                            {route.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
