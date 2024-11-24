import GalleryDisplay from "../../components/GalleryPhoto/GalleryDisplay";
import cosmic from '@/lib/cosmicClient'

// padding, center, prob 3 columns

export default async function Gallery() {
let vals = await cosmic.media.find({"folder":"gallery"})
.limit(50)
.props("url,name")
console.log(vals.media)

    return (
      <div>
        <GalleryDisplay urls={vals} />
      </div>
    );
  }
