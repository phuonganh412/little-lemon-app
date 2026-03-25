import { FieldContainer } from "./FieldContainer";

export function SelectField({ id, label, error, options, placeholder, ...props }) {
    return (
        <FieldContainer id={id} label={label} error={error}>
            <select
                id={id}
                className="h-12 w-full rounded-xl border border-[#8c8c8c] bg-white/70 px-4 text-lg text-[#333333] outline-none transition focus:border-[#495e57] focus:ring-2 focus:ring-[#495e57]/30"
                {...props}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </FieldContainer>
    );
}
