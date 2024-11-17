import styles from "./Team.module.css";

interface MemberProps {
  role: string;
  name: string;
  imageUrl: string;
}

export default function Member({ role, name, imageUrl }: MemberProps) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.memberLeft}>
        <p>{role}</p>
        <p>{name}</p>
      </div>
      <img src={imageUrl} className={styles.memberPhoto} />
    </div>
  );
}
