export function FooterHoursContent({ items = [] }) {
    return (
        <div>
            <h3 className="text-sm font-extrabold tracking-widest text-white">
                HOURS
            </h3>
            <div className="mt-5">
                <div className="space-y-5 text-sm leading-6 text-white/80">
                    {items.map((item) => (
                        <div key={item.label}>
                            <p className="font-medium text-white">
                                {item.label}
                            </p>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

