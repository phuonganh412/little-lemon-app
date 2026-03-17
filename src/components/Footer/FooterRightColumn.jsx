import { footerConfig } from "./footer.config";
import { ColumnContent } from "./ColumnContent";

export function FooterRightColumn() {
    return (
        <>
            {footerConfig.map((section) => (
                <ColumnContent key={section.title} {...section} />
            ))}
        </>
    );
}
