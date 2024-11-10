This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# How to Use Cosmic

Hey devs, as we start making more progress on the site, we are beginning to encounter content that the client may want to edit. Our solution to this is using a Content Management System (CMS). We will be using Cosmic CMS to ensure the client can add onto/edit the site after we hand it off to them. The following is a guide for settting it up with your device and what your workflow should be.

## Setting Up the Environment Variables - API Keys

Ensure you are using environment variables for your API keys. Doing this is really simple, all you have to do is

- create a `.env` file in the root of the project
- fill the file with:

```bash
BUCKET_SLUG=<find on Cosmic dashboard>
BUCKET_READ_KEY=<find on Cosmic dashboard>
```

- Just to refresh your mind, you can access these using process.env.BUCKET_SLUG, but you shouldn't need to do so in this project.

## Creating an Object Type

An **object type** is simply an object reprsentation of your data. You define the fields/images that the object requires and refer to them in your code later.

After you login to Cosmic using the login information we provided (if you don't have it you can ask our PM), click on the Soul Sisters project to enter the dashboard. In the sidebar, you will find the `OBJECT TYPES` heading. Click on the plus sign next to it to start creating a new project type.

Here, you will be provided with multiple settings to adjust.

#### Basic Settings

**Multiple** means there can be multiple of an object type, while **Singleton** means the object type will consist of only one element. After that, just fill the fields and choose a nice icon!

### Content Model

Each object will have a title and slug by default. You can keep the slug on for this project. To your right you will see multiple fields you can drag in. While defining this, think about what about the content the user will want to edit.

### Additional Settings

You can ignore this and click save to save your content type

## Creating Objects

Creating an object is as simple as selecting it from the left sidebar and filling out the fields! Create some sample objects for your reference either by referncing the content in the Google Drive or making them up yourself. Please indicate if the data is mock data through its title so we dont keep it when we hand it in to the client!

## Querying the Objects

Now that we set up the content in the CMS, how do we acces it from the front end? We query it with our client handler!
Ensure that the top of the file you are editing has the following import:

```javascript
import cosmic from "<RELATIVE PATH TO COSMICCLIENT.TS";
```

- ensure that we are using the relative path to lib/cosmicClient.ts
  Here is an example query using cosmic. This can be found on `app/page.tsx` (the home page)

```javascript
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
    <div>
      <video
        src={response.object.metadata.video.url}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
```

NOTE: Note: you must use response.object to access the fields you defined when you created the object type
NOTE: you can define what fields you want in props. So here, I only received slug, title, and metadata.

The Cosmic documentation can be found here: https://www.cosmicjs.com/docs
The documentation is our number one resource when it comes to debugging our queries or how to represent something as a content type.

Reading the Queries page would be the most beneficial for now to explore how to construct your queries
https://www.cosmicjs.com/docs/api/queries

### Note When Reading the Documenation

```javascript
const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});
```

You may see the code above when reading the doc. However, all we have to do is

```javascript
import cosmic from "<PATH TO cosmicClient.JS";
```

since we already do this for you in `lib/cosmicClient.js`
