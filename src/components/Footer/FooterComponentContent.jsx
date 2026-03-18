import { FooterAddressContent } from "./FooterAddressContent";
import { FooterHoursContent } from "./FooterHoursContent";
import { FooterNavigationContent } from "./FooterNavigationContent";

export function FooterComponentContent({ type, items }) {
    switch (type) {
        case "navigation":
            return <FooterNavigationContent />;
        case "hours":
            return <FooterHoursContent items={items} />;
        case "address":
            return <FooterAddressContent items={items} />;
        default:
            return null;
    }
}
