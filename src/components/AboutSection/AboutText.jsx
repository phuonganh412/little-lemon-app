export function AboutText({ title, subtitle, paragraphs, headingId }) {
    return (
        <div className="max-w-xl">
            <h2
                id={headingId}
                className="font-serif text-5xl font-medium text-[#495E57]"
            >
                {title}
            </h2>
            <h3 className="mt-2 text-2xl font-semibold text-[#495E57]">
                {subtitle}
            </h3>
            <div className="mt-6 space-y-4 text-left text-gray-600 leading-relaxed">
                {paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
            </div>
        </div>
    );
}
