import Image from 'next/image';
import styles from './GalleryPhoto.module.css';
// lazy load the photos, scroll, import from google drive
export default function GalleryPhoto(props: { url: string; caption: string | undefined; width: number; height: number }) {
	return (
		<div className={styles["photo-container"]}>
			<Image src={props.url}
				className={styles["gallery-photo"]}
				alt=""
				width={props.width}
				height={props.height}
				quality={50}
			></Image>
			<div className={styles["photo-caption"]}>
				{props.caption}
			</div>
		</div>

	)
}