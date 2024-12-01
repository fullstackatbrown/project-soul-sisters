import cosmic from "@/lib/cosmicClient";

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
  const image = metadata?.image?.imgix_url || "/default-image.jpg";
    return (
        <div className="bg-neutral-900 text-white min-h-screen w-full flex flex-col md:flex-row items-center p-10 space-y-10">
            {/* Left Section: Heading + Content */}
            <div className="flex flex-col w-full md:w-3/5 space-y-10" style={{ marginLeft: '2%', marginRight: '2%', marginTop: '10%'}}>
                <h2 className="text-2xl font-bold text-left mb-4 ml-4">{title}</h2>
                <section className="bg-neutral-800 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col w-full space-y-4 p-5" style={{ whiteSpace: 'pre-line' }}>
                        <p className="text-gray-200 leading-relaxed">{description}</p>
                    </div>
                </section>
            </div>
            {/* Right Section: Image (Full Height) */}
            <div className="w-full md:w-2/5">
                <img 
                    src={image} 
                    alt="film-picture" 
                    className="object-cover w-full h-full rounded-lg shadow-lg" 
                    style={{ height: '100%' }}
                />
            </div>
        </div>
    );
}