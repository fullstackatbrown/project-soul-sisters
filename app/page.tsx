import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});

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
