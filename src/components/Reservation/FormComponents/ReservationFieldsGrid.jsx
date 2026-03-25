import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { TextField } from "./TextField";

export function ReservationFieldsGrid({
    values,
    errors,
    handleChange,
    handleBlur,
    timeOptions,
    guestOptions,
    occasionOptions,
}) {
    return (
        <>
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
                    error={errors.fullName}
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
                    error={errors.email}
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
                    error={errors.phone}
                    required
                />
            </div>

            <TextField
                id="date"
                name="date"
                label="Select the date for your reservation:"
                type="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.date}
                required
            />

            <SelectField
                id="time"
                name="time"
                label="Choose the time for your reservation:"
                value={values.time}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.time}
                options={timeOptions}
                placeholder="Choose time..."
                required
            />

            <SelectField
                id="guests"
                name="guests"
                label="Specify the number of guests joining for the reservation:"
                value={values.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.guests}
                options={guestOptions}
                placeholder="Select guests..."
                required
            />

            <SelectField
                id="occasion"
                name="occasion"
                label="Let us know if you're celebrating any special occasion:"
                value={values.occasion}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.occasion}
                options={occasionOptions}
                placeholder="Choose occasion..."
                required
            />

            <div className="md:col-span-2">
                <TextAreaField
                    id="message"
                    name="message"
                    label="Your message:"
                    placeholder="Share anything else we should know..."
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
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
        </>
    );
}
