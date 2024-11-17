import styles from './teampage.module.css';

interface TeamPageProps {
    title: string;
    imageUrl: string;
    content: string;
}

export default function TeamPage({ title, imageUrl, content }: TeamPageProps) {
    return (
        <div className={styles.teamContainer}>
            <div className={`${styles.imageWrapper}`}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.textContent}>{content}</p>
            </div>
        </div>
    );
}
