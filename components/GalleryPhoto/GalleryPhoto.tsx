import Image from 'next/image';
import styles from './GalleryPhoto.module.css';
// lazy load the photos, scroll, import from google drive
export default function GalleryPhoto(props: { url: string; caption: string | undefined; width: number; height: number }) {
	return (
		<div className={styles["photo-container"]}>
			<Image src={props.url}
				className={`${styles["gallery-photo"]}`}
				alt=""
				width={props.width}
				height={props.height}
				placeholder="blur"
				blurDataURL='https://static.wikia.nocookie.net/company-bumpers/images/3/3d/Disneycomingsoontotheaters.JPG/revision/latest/smart/width/250/height/250?cb=20190913032923'
				style={{borderRadius: "16px"}}
				loading='lazy'
			></Image>
			<div className={styles["photo-caption"]}>
				{props.caption}
			</div>
		</div>
	)
}