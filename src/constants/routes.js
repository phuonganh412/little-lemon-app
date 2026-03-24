/** Single source of truth for the reservation page path (used by App + nav). */
export const RESERVATION_PATH = "/reservation";

export const routes = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Menu", url: "/menu" },
    { label: "Reservations", url: RESERVATION_PATH },
    { label: "Online orders", url: "/online-order" },
    { label: "Login", url: "/login" },
];
