import { ReviewCard } from "./ReviewCard";
import { reviewsConfig } from "./reviews.config";

export const TestimonialsSection = () => {
    return (
        <section className="bg-[#4a6b5b] py-20" aria-labelledby="testimonials-heading">
            <div className="mx-auto max-w-7xl px-12">
                {/* Section heading */}
                <h2
                    id="testimonials-heading"
                    className="font-serif mb-10 text-center text-5xl font-medium text-white"
                >
                    Testimonials
                </h2>

                {/* Reviews grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {reviewsConfig.map((review) => (
                        <ReviewCard
                            key={review.id}
                            name={review.name}
                            rating={review.rating}
                            review={review.review}
                            avatar={review.avatar}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
