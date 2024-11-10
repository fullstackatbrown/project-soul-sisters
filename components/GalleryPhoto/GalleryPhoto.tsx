import styles from './GalleryPhoto.module.css'; 
import { useState } from 'react';

export default function GalleryPhoto(props) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
		<img src={props.url} className={styles["gallery-photo"]} onClick={() => setShowModal(true)}></img>
		{showModal ? (
			<div className="justify-center items-center flex fixed outline-none inset-0">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              <div className="border-0 shadow-lg relative flex flex-col w-full outline-none">
                <img src={props.url} className="w-full" onClick={() => setShowModal(false)}></img>
              </div>
            </div>
          </div>
			) : null}
		</div>
	)
}