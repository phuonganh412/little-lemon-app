import { useCallback, useRef } from "react";
import { menuConfig } from "./menu.config";
import { MenuCard } from "./MenuCard";
import { ArrowButton } from "./ArrowButton";

export const HightlightCarousel = () => {
    const scrollRef = useRef(null);

    const scroll = useCallback((direction) => {
        const scrollAmount = 300;
        const left = direction === "left" ? -scrollAmount : scrollAmount;

        scrollRef.current?.scrollBy({ left, behavior: "smooth" });
    }, []);

    return (
        <div className="relative">
            <ArrowButton direction="left" onClick={() => scroll("left")} />

            <div
                ref={scrollRef}
                className="flex gap-10 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
            >
                {menuConfig.map((item) => (
                    <MenuCard key={item.id} {...item} />
                ))}
            </div>

            <ArrowButton direction="right" onClick={() => scroll("right")} />
        </div>
    );
};
