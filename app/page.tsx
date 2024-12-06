import cosmic from "../lib/cosmicClient";
import React from 'react';

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
    <div style={{paddingRight: "24px", background: "black"}}>
      <video
        src={response.object.metadata.video.url}
        autoPlay
        loop
        playsInline
        style={{
          height: "100vh",
          objectFit: "cover"
        }}
      />
    </div>
  );
}
