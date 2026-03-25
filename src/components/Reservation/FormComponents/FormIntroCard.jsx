export function FormIntroCard() {
    return (
        <div className="relative rounded-t-2xl bg-[#495e57] px-8 py-10 text-white">
            <p className="mx-auto max-w-4xl text-center text-2xl">
                This form allows you to reserve a table at our restaurant for your upcoming dining
                experience.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-center text-2xl">
                Please fill out the following details to secure your reservation.
            </p>
            <div
                className="absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 bg-[#495e57]"
                aria-hidden="true"
            />
        </div>
    );
}
