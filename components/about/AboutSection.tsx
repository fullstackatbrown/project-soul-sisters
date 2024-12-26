import cosmic from "@/lib/cosmicClient";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default async function AboutSection() {
    const aboutData = await cosmic.objects
        .findOne({
            type: "about-page",
            slug: "about-us",
        })
        .props("title,metadata")
        .depth(1);

    const { metadata } = aboutData?.object;
    const title = metadata?.["title_of_page"] || "About";
    const description = metadata?.["content_of_box"] || `Haitian-Canadian sisters Pem and Sonam Almonor Shulman based the script for Soul Sisters on their recent experiences at York University (Canada) and Brown University (USA), respectively.
    Soul Sisters conveys the dreams and struggles of a generation with biting wit, flair and a passion for social justice.This slyly satiric take on the young immigrant university student coming of age tale will delight and inspire.
    The sisters are mentored by NAACP Image Award Nominated filmmakers Jeanne Marie - Almonor and John Shulman.`;
    const image_url = `${metadata?.image?.imgix_url}?q=40&auto=format,compress` || "/images/About.JPG";
    return (
        <div className={`min-h-screen w-full items-center ${styles.container}`}>
            {/* Left Section: Heading + Content */}
            <div style={{ margin: "auto", padding: "16px" }}>
                <div className="flex flex-col max-w-xl">
                    <h2 className="text-5xl text-left mb-4 ml-4 py-16">
                        {title}
                    </h2>
                    <section className={`rounded-3xl bg-neutral-800 shadow-md ${styles.about}`}>
                        <div className="flex flex-col w-full space-y-4" style={{ whiteSpace: 'pre-line' }}>
                            <p className="text-gray-200 leading-relaxed text-xl font-extralight">
                                {description}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            {/* Right Section: Image (Full Height) */}
            <div className={`h-screen sticky top-0 justify-self-end ${styles.image}`}>
                <Image
                    src={image_url}
                    alt="film-picture"
                    className="object-fill w-full h-full rounded-3xl shadow-lg"
                    width={metadata?.width || 1536}
                    height={metadata?.height || 2304}
                    loading="eager"
                />
            </div>
        </div>
    );
}