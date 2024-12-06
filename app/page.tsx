import cosmic from "../lib/cosmicClient";
import React from 'react';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'

export default async function Home() {
  const query = {
    type: "main-page-video",
    slug: "background-video",
  };
  const response = await cosmic.objects
    .findOne(query)
    .props("slug,title,metadata")
    .depth(1);
  // console.log("Fetched data:", JSON.stringify(data, null, 2));
  // console.log("Metadata:", data);
  return (
    <VideoPlayer videoUrl={response.object.metadata.video.url} />
  );
}