export const HighlightHeader = () => (
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
);
