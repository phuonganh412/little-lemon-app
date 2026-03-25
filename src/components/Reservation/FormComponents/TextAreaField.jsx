import { FieldContainer } from "./FieldContainer";

export function TextAreaField({ id, label, error, ...props }) {
    return (
        <FieldContainer id={id} label={label} error={error}>
            <textarea
                id={id}
                className="min-h-44 w-full rounded-xl border border-[#8c8c8c] bg-white/70 px-4 py-3 text-lg text-[#333333] outline-none transition focus:border-[#495e57] focus:ring-2 focus:ring-[#495e57]/30"
                {...props}
            />
        </FieldContainer>
    );
}
