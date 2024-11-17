import { createBucketClient } from "@cosmicjs/sdk";
import cosmic from "../../lib/cosmicClient";
import styles from "./Team.module.css";
import Member from "./Member";

export default async function Team() {
  const data = await cosmic.objects
    .find({
      type: "team-members",
    })
    .props("slug,title,metadata")
    .depth(1);

  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.teamTitle}>Production Team</h1>
      <div className={styles.teamMembers}>
        {data.objects.map((member: any, i: number) => (
          <Member
            role={member.metadata.role}
            name={member.title}
            imageUrl={member.metadata.photo.url}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
