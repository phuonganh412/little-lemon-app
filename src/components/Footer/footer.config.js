import { NavVertical } from "components/NavVertical";
import { routes } from "constants/routes";

export const footerConfig = [
    {
        title: "NAVIGATION",
        component: NavVertical,
        props: { routes },
    },
    {
        title: "HOURS",
        items: [
            { label: "Monday - Friday", value: "8am - 10pm" },
            { label: "Saturday & Sunday", value: "10am - 4pm" },
            { label: "Online Ordering", value: "11am - 9pm" },
        ],
    },
    {
        title: "ADDRESS",
        items: ["Address here...", "Phone number", "Email"],
    },
];
