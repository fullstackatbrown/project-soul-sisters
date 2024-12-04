import styles from './GalleryPhoto.module.css'; 
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';
// lazy load the photos, scroll, import from google drive
export default function GalleryPhoto(props: { url: string | undefined; caption: string | undefined }) {
	return (
		<div className={styles["photo-container"]}>
		<img src={props.url} 
		className={styles["gallery-photo"]}
		loading="lazy"
		></img>
		<div className={styles["photo-caption"]}>
		 	{props.caption}
		</div>

		
		</div>

	)
}