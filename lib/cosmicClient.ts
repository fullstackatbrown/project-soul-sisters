import { createBucketClient } from "@cosmicjs/sdk";

//https://www.cosmicjs.com/docs/frameworks#next-js
/**
 *  We also have reading on the README.md on how to use this client
 * The above is a link to the nextjs cosmicjs tutorial and documentation.
 * All we have to do is import cosmic and query from that rather than always creating a new client
 * NOTE: to reference an object you queried, its always <data you got>.object.<field>. Can console.log(data) to see the structure
 */
const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});

export default cosmic;
