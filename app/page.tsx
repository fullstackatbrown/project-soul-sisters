import cosmic from "../lib/cosmicClient";

export default async function Home() {
  const query = {
    type: "main-page-video",
    slug: "background-video",
  };
  let response = await cosmic.objects
    .findOne(query)
    .props("slug,title,metadata")
    .depth(1);
  // console.log("Fetched data:", JSON.stringify(data, null, 2));
  // console.log("Metadata:", data);
  return (
    <div className = "black-background">
      <video
        src={response.object.metadata.video.url}
        autoPlay  
        loop
        playsInline
      />
      <p className="text-balance mt-4 text-center px-4 dark:text-gray-300">
        Welcome to our homepage! This is a placeholder blurb describing the content 
        or purpose of the video. Stay tuned for more updates.
      </p>
    </div>
  );
}
