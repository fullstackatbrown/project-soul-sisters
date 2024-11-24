import GalleryDisplay from "../../components/GalleryPhoto/GalleryDisplay";
import { createBucketClient } from '@cosmicjs/sdk'

// padding, center, prob 3 columns

export default async function Gallery() {
const cosmic = createBucketClient({
  bucketSlug: 'soul-sisters-production-c52519c0-9a32-11ef-9152-c3825c893765',
  readKey: 'toT4sKELwi3M0xzs4s9DXwNnWV1X64ACd8662cbH1cjMEGV79W'
})
let vals = await cosmic.media.find({"folder":"gallery"})
.limit(50)
.props("url,imgix_url,name")
console.log(vals.media)

    return (
      <div>
        <GalleryDisplay urls={vals} />
      </div>
    );
  }
