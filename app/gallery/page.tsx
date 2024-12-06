import GalleryDisplay from "../../components/GalleryPhoto/GalleryDisplay";
import cosmic from '@/lib/cosmicClient'

// padding, center, prob 3 columns

export default async function Gallery() {
  let vals = await cosmic.media.find({ "folder": "gallery" })
    .limit(50)
    .props("url,name,alt_text,width,height")

  return (
    <div style={{background: "black"}}>
      <GalleryDisplay urls={vals} />
    </div>
  );
}
