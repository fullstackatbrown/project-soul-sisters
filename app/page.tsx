import cosmic from "../lib/cosmicClient";

export default async function Home() {
  let data = await cosmic.objects
    .findOne({
      type: "home-video",
      slug: "main-page-background-video",
    })
    .props("slug,title,metadata")
    .depth(1);
  console.log("Fetched data:", JSON.stringify(data, null, 2));
  console.log("Metadata:", data);
  return (
    <div>
      <video
        src={data.object.metadata.video.url}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
