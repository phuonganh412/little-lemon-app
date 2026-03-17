import { FooterLeftColumn } from "./FooterLeftColumn";
import { FooterRightColumn } from "./FooterRightColumn";

export function Footer() {
    return (
        <footer className="bg-[#495E57] text-left text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
                <FooterLeftColumn />
                <FooterRightColumn />
            </div>
        </footer>
    );
}
