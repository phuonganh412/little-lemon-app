export const MenuCard = ({ title, price, image, description }) => {
    return (
        <article className="flex w-[300px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-[#b8b8b8] bg-[#f3f3f3]">
            <img src={image} alt={title} className="h-52 w-full object-cover" />

            <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#101010]">
                        {title}
                    </h3>
                    <span className="text-xl font-bold text-[#F15A29]">
                        {price}
                    </span>
                </div>

                <p className="min-h-20 text-base leading-snug text-[#2d2d2d] text-left">
                    {description}
                </p>

                <a
                    href="/order-online"
                    className="mt-auto inline-flex items-center gap-2 text-lg font-semibold text-[#1a1a1a] transition-colors hover:text-black"
                >
                    Order a delivery
                    <span aria-hidden="true" className="text-2xl">
                        &#128668;
                    </span>
                </a>
            </div>
        </article>
    );
};
