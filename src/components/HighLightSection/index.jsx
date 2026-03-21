import { useCallback, useRef } from "react";
import { menuConfig } from "./menu.config";
import { MenuCard } from "./MenuCard";

export const HighLightSection = () => {
    const scrollRef = useRef(null);

    const scroll = useCallback((direction) => {
        const scrollAmount = 300;
        const left = direction === "left" ? -scrollAmount : scrollAmount;

        scrollRef.current?.scrollBy({ left, behavior: "smooth" });
    }, []);

    return (
        <section className="bg-[#e9e9eb] py-20">
            <div className="mx-auto max-w-7xl px-12">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="font-serif text-5xl font-medium text-[#495E57]">
                        Specials
                    </h2>

                    <a
                        href="/order-online"
                        className="inline-flex items-center justify-center rounded-xl bg-[#495E57] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#3f504a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#495E57] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e9e9eb]"
                    >
                        Online Menu
                    </a>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                        className="absolute left-[-28px] top-1/2 z-10 -translate-y-1/2 text-5xl font-light leading-none text-gray-500 transition-colors hover:text-gray-700"
                    >
                        &#8249;
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-10 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
                    >
                        {menuConfig.map((item) => (
                            <MenuCard key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        type="button"
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                        className="absolute right-[-28px] top-1/2 z-10 -translate-y-1/2 text-5xl font-light leading-none text-gray-500 transition-colors hover:text-gray-700"
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </section>
    );
};
