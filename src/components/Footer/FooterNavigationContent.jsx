import { NavVertical } from "components/NavVertical";
import { routes } from "constants/routes";

export function FooterNavigationContent() {
    return (
        <div>
            <h3 className="text-sm font-extrabold tracking-widest text-white">
                NAVIGATION
            </h3>
            <div className="mt-5">
                <NavVertical routes={routes} />
            </div>
        </div>
    );
}

