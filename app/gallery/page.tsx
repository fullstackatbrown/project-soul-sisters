import { Suspense } from "react";
import GalleryDisplay from "../../components/GalleryPhoto/GalleryDisplay";
import cosmic from '@/lib/cosmicClient'

// padding, center, prob 3 columns

export default async function Gallery() {
  let vals = await cosmic.media.find({ "folder": "gallery" })
    .props("imgix_url,name,alt_text,width,height")

  return (
    <Suspense fallback={<div></div>}>
    <div style={{background: "black"}}>
      <GalleryDisplay urls={vals} />
    </div>
    </Suspense>
  );
}
