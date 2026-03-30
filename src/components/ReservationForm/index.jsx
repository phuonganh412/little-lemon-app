import { FormIntroCard } from "./FormComponents/FormIntroCard";
import { ReservationSuccessBanner } from "./FormComponents/ReservationSuccessBanner";
import { SelectField } from "../SelectField";
import { TextAreaField } from "../TextAreaField";
import { TextField } from "../TextField";
import {
    useReservationForm,
    guestOptions,
    occasionOptions,
} from "./useReservationForm";

export function ReservationForm() {
    const {
        values,
        error,
        isSuccess,
        availableTimeOptions,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useReservationForm();

    return (
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border-4 border-[#9ec0b8] bg-[#f3f3f3]/85 shadow-xl backdrop-blur-[1px]">
            <FormIntroCard />
            <div className="px-8 py-12 md:px-12">
                {isSuccess ? <ReservationSuccessBanner /> : null}

                <form
                    className="grid grid-cols-1 gap-8 md:grid-cols-2"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className="md:col-span-2">
                        <TextField
                            id="fullName"
                            name="fullName"
                            label="Full name:"
                            type="text"
                            placeholder="Enter your name..."
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.fullName}
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextField
                            id="email"
                            name="email"
                            label="Email:"
                            type="email"
                            placeholder="Enter your email..."
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.email}
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone Number:"
                            type="tel"
                            placeholder="Enter your phone number..."
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.phone}
                            required
                        />
                    </div>

                    <div className="min-w-0 md:col-span-1">
                        <TextField
                            id="date"
                            name="date"
                            label="Select the date for your reservation:"
                            type="date"
                            value={values.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.date}
                            required
                        />
                    </div>

                    <div className="min-w-0 md:col-span-1">
                        <SelectField
                            id="time"
                            name="time"
                            label="Choose the time for your reservation:"
                            value={values.time}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.time}
                            options={availableTimeOptions}
                            placeholder="Choose time..."
                            required
                        />
                    </div>

                    <div className="min-w-0 md:col-span-1">
                        <SelectField
                            id="guests"
                            name="guests"
                            label="Specify the number of guests joining for the reservation:"
                            value={values.guests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.guests}
                            options={guestOptions}
                            placeholder="Select guests..."
                            required
                        />
                    </div>

                    <div className="min-w-0 md:col-span-1">
                        <SelectField
                            id="occasion"
                            name="occasion"
                            label="Let us know if you're celebrating any special occasion:"
                            value={values.occasion}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.occasion}
                            options={occasionOptions}
                            placeholder="Choose occasion..."
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextAreaField
                            id="message"
                            name="message"
                            label="Your message:"
                            placeholder="Share anything else we should know..."
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={error.message}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="h-14 w-full rounded-xl bg-[#495e57] text-3xl font-semibold text-white transition hover:bg-[#3d4f49]"
                        >
                            BOOK NOW
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
