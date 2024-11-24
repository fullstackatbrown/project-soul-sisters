import styles from './GalleryPhoto.module.css'; 
import { useState } from 'react';
// lazy load the photos, scroll, import from google drive
export default function GalleryPhoto(props) {
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