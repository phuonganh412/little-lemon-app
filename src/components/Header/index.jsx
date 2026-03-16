import { Nav } from "components/Nav";
import logo from "assets/logo.jpg";
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
                    <Nav className="flex-1" />
                </div>
            </div>
        </header>
    );
}
