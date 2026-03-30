export function FormFieldContainer({ id, label, error, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="text-left text-2xl font-medium text-[#333333]"
            >
                {label}
            </label>
            {children}
            {error ? (
                <p
                    className="text-left text-sm font-medium text-red-700"
                    role="alert"
                >
                    {error}
                </p>
            ) : null}
        </div>
    );
}
