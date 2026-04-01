import { FormFieldContainer } from "../FormFieldContainer";

export function TextField({ id, label, error, ...props }) {
    return (
        <FormFieldContainer id={id} label={label} error={error}>
            <input
                id={id}
                className="h-12 w-full rounded-xl border border-[#8c8c8c] bg-white/70 px-4 text-lg text-[#333333] outline-none transition focus:border-[#495e57] focus:ring-2 focus:ring-[#495e57]/30"
                {...props}
            />
        </FormFieldContainer>
    );
}
