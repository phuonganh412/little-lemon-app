export const ArrowButton = ({ direction, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={`Scroll ${direction}`}
        className={`absolute ${direction === "left" ? "left-[-28px]" : "right-[-28px]"} top-1/2 z-10 -translate-y-1/2 text-5xl font-light leading-none text-gray-500 transition-colors hover:text-gray-700`}
    >
        {direction === "left" ? "\u2039" : "\u203a"}
    </button>
);
