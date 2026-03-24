const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span
                    key={i}
                    className={`text-xl ${i < rating ? "text-[#F4C430]" : "text-[#d1d5db]"}`}
                    aria-hidden="true"
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export const ReviewCard = ({ name, rating, review, avatar }) => {
    return (
        <article className="flex flex-col gap-3 rounded-2xl border border-[#d1d5db] bg-white p-4 shadow-sm">
            {/* Customer info row */}
            <div className="flex items-center gap-3">
                <img
                    src={avatar}
                    alt={name}
                    className="h-14 w-14 rounded-full object-cover flex-shrink-0 border-2 border-[#e9e9eb]"
                />
                <span className="text-base font-semibold text-[#1a1a1a]">{name}</span>
            </div>

            {/* Star rating */}
            <StarRating rating={rating} />

            {/* Review text */}
            <p className="text-sm leading-relaxed text-[#3d3d3d] text-left">{review}</p>
        </article>
    );
};
