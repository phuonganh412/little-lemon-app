import aboutChef1 from "assets/about-chef-1.jpg";
import aboutChef2 from "assets/about-chef-2.jpg";

const headingId = "about-heading";

export function AboutSection() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-12 md:flex-row md:items-center md:justify-between md:gap-16">
                <div className="relative w-full max-w-md shrink-0 pb-16 md:pb-20">
                    <img
                        className="ml-auto block h-80 w-4/5 rounded-2xl object-cover shadow-lg sm:h-96"
                        src={aboutChef1}
                        alt="Chef garnishing a plate in the Little Lemon kitchen"
                    />
                    <img
                        className="absolute bottom-0 left-0 w-3/5 rounded-2xl object-cover shadow-xl ring-4 ring-white"
                        src={aboutChef2}
                        alt="Chefs collaborating in the restaurant kitchen"
                    />
                </div>

                <div className="max-w-xl">
                    <h2
                        id={headingId}
                        className="font-serif text-5xl font-medium text-[#495E57]"
                    >
                        Little Lemon
                    </h2>
                    <h3 className="mt-2 text-2xl font-semibold text-[#495E57]">
                        Chicago
                    </h3>
                    <div className="mt-6 space-y-4 text-left text-gray-600 leading-relaxed">
                        <p>
                            Little Lemon is a charming neighborhood bistro that
                            serves simple food and classic cocktails in a lively
                            but casual environment. Our kitchen draws
                            inspiration from Mediterranean traditions and local
                            ingredients.
                        </p>
                        <p>
                            The restaurant features a locally-sourced menu with
                            daily specials, a robust wine list, and thoughtful
                            hospitality that makes everyone feel like a regular.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
