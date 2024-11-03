import { createBucketClient } from "@cosmicjs/sdk";

//https://www.cosmicjs.com/docs/frameworks#next-js
/**
 * The above is a link to the nextjs cosmicjs tutorial and documentation.
 * All we have to do is import cosmic and query from that rather than always creating a new client
 */
const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});

export default cosmic;
