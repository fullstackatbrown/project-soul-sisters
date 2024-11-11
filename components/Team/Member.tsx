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
        <div>{role}</div>
        <div>{name}</div>
      </div>
      <img src={imageUrl} className={styles.memberPhoto} />
    </div>
  );
}
