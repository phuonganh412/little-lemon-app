import { Link } from "react-router-dom";

export function NavHorizontal({ className = "", routes = [] }) {
    return (
        <nav className={className}>
            <ul className="m-0 flex flex-wrap list-none items-center justify-center gap-10 p-0">
                {routes.map((route) => (
                    <li key={route.url}>
                        <Link
                            className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                            to={route.url}
                        >
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
