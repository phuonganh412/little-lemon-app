export function NavHorizontal({ className = "", routes = [] }) {
    return (
        <nav className={className}>
            <ul className="m-0 flex flex-wrap list-none items-center justify-center gap-10 p-0">
                {routes.map((route) => (
                    <li>
                        <a
                            className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
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
