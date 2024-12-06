// import { createBucketClient } from "@cosmicjs/sdk";
import cosmic from "../../lib/cosmicClient";
import styles from "./Team.module.css";
// import Member from "./Member";
import Image from "next/image";

export interface Starname {
  name: string;
}

export default async function Team() {
  try {
    // const data = await cosmic.objects
    //   .find({
    //     type: "team-members",
    //   })
    //   .props("slug,title,metadata")
    //   .depth(1);

    // const starring = await cosmic.objects
    //   .findOne({
    //     type: "starring",
    //     slug: "starring-members",
    //   })
    //   .props("slug,title,metadata,type")
    //   .depth(1);

    const aboutPage = await cosmic.objects
      .findOne({
        type: "about-page",
        slug: "about-us",
      })
      .props("slug,title,metadata,type")
      .depth(1);

    const production_team_image_url =
      aboutPage?.object?.metadata?.production_team_image?.url;
    console.log(production_team_image_url);

    // console.log(starring);

    return (
      <div className={styles.teamContainer}>
        <h1 className={styles.teamTitle}>Production Team</h1>
        <div className={styles.teamContent}>
          {production_team_image_url && (
            <Image
              src={production_team_image_url}
              alt="production team image"
              width={375}
              height={562.5}
              className={styles.teamImage}
              loading="eager"
            />
          )}

          <div className={styles.teamNames}>
            <div>
              <h2>Written by</h2>
              <div className={styles.columnContainer}>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
              </div>
            </div>

            <div>
              <h2>Directors</h2>
              <div className={styles.columnContainer}>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
              </div>
            </div>

            <div>
              <h2>Producer</h2>
              <div className={styles.columnContainer}>
                <p>Name Lastname</p>
              </div>
            </div>

            <div>
              <h2>Starring</h2>
              <div className={styles.columnContainer}>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
                <p>Name Lastname</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading team data.</div>;
  }
}
