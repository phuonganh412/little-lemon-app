export function FooterAddressContent({ items = [] }) {
    return (
        <div>
            <h3 className="text-sm font-extrabold tracking-widest text-white">
                ADDRESS
            </h3>
            <div className="mt-5">
                <ul className="space-y-3 text-sm leading-6 text-white/80">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

