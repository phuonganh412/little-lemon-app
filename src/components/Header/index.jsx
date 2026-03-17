import { NavHorizontal } from "components/NavHorizontal";
import logo from "assets/logo.jpg";
import { routes } from "constants/routes";

export function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-200">
            <div className="mx-auto max-w-6xl px-6 py-6">
                <div className="flex items-center gap-10">
                    <img
                        className="h-12 w-auto shrink-0"
                        src={logo}
                        alt="Little Lemon logo"
                    />
                    <NavHorizontal className="flex-1" routes={routes} />
                </div>
            </div>
        </header>
    );
}
