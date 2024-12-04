import cosmic from "@/lib/cosmicClient";
import Image from "next/image";

export default async function AboutSection() {
    const aboutData = await cosmic.objects
        .findOne({
            type: "about-page",
            slug: "about-us",
        })
        .props("title,metadata")
        .depth(1);

    const { title, metadata } = aboutData?.object || {};
    const description = metadata?.["content_of_box"] || "Default description";
    const image = metadata?.image?.url || "/default-image.jpg";
    return (
        <div className="bg-neutral-900 min-h-screen w-full flex flex-row items-center">
            {/* Left Section: Heading + Content */}
            <div style={{ margin: "auto", padding: "16px"}}>
                <div className="flex flex-col space-y-16 max-w-xl">
                    <h2 className="text-4xl text-left mb-4 ml-4">
                        {title}
                    </h2>
                    <section className="bg-neutral-800 p-12 rounded-lg shadow-md">
                        <div className="flex flex-col w-full space-y-4 p-6" style={{ whiteSpace: 'pre-line' }}>
                            <p className="text-gray-200 leading-relaxed text-xl font-extralight">
                                {description}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            {/* Right Section: Image (Full Height) */}
            <div className="h-screen justify-self-end">
                <img
                    src={image}
                    alt="film-picture"
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}