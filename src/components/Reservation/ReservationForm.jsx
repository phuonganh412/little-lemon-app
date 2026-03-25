import { FormIntroCard } from "./FormComponents/FormIntroCard";
import { ReservationSuccessBanner } from "./FormComponents/ReservationSuccessBanner";
import { ReservationFieldsGrid } from "./FormComponents/ReservationFieldsGrid";
import {
    useReservationForm,
    timeOptions,
    guestOptions,
    occasionOptions,
} from "./useReservationForm";

export function ReservationForm() {
    const {
        values,
        errors,
        isSubmitted,
        isSuccess,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useReservationForm();

    return (
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border-4 border-[#9ec0b8] bg-[#f3f3f3]/85 shadow-xl backdrop-blur-[1px]">
            <FormIntroCard />
            <div className="px-8 py-12 md:px-12">
                <ReservationSuccessBanner
                    isSubmitted={isSubmitted}
                    isSuccess={isSuccess}
                />

                <form
                    className="grid grid-cols-1 gap-8 md:grid-cols-2"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <ReservationFieldsGrid
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        timeOptions={timeOptions}
                        guestOptions={guestOptions}
                        occasionOptions={occasionOptions}
                    />
                </form>
            </div>
        </div>
    );
}
