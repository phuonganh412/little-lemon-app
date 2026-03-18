export function Nav({ className = "" }) {
    return (
        <nav className={className}>
            <ul className="m-0 flex flex-wrap list-none items-center justify-center gap-10 p-0">
                <li>
                    <a
                        className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        href="/"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        href="/about"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        href="/menu"
                    >
                        Menu
                    </a>
                </li>
                <li>
                    <a
                        className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        href="/reservations"
                    >
                        Reservations
                    </a>
                </li>
                <li>
                    <a
                        className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        href="/online-order"
                    >
                        Order online
                    </a>
                </li>
                <li>
                    <a
                        className="no-underline text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        href="/login"
                    >
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}
