export function ColumnContent({ title, component: Component, props, items }) {
    const renderContent = () => {
        // Component-based (e.g. Nav)
        if (title === "NAVIGATION") {
            return <Component {...props} />;
        }

        // HOURS (stacked)
        if (title === "HOURS") {
            return (
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
            );
        }

        // ADDRESS (list)
        if (title === "ADDRESS") {
            return (
                <ul className="space-y-3 text-sm leading-6 text-white/80">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        }

        return null;
    };

    return (
        <div>
            <h3 className="text-sm font-extrabold tracking-widest text-white">
                {title}
            </h3>
            <div className="mt-5">{renderContent()}</div>
        </div>
    );
}
