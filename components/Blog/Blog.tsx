import styles from './Blog.module.css';
import Image from 'next/image';

interface BlogProps {
    title: string;
    imageUrl: string;
    videoUrl: string;
    ytUrl: string;
    description: string;
    date: string;
}

export default function Blog({ title, imageUrl, videoUrl, ytUrl, description, date }: BlogProps) {
    const ytRegex = /(?:https?:\/\/)?(?:www.)?(?:youtube\.com|youtu\.be|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?list=.*&v=)?((?:\w|-){11})(?:&list=(?:\w+)&?)?/;
    const matches = ytUrl?.match(ytRegex) || ["no match"];
    console.log(matches);
    return (
        <div className={styles.blogContainer}>
            <div className={styles.blogHeader}>
                <h2 className={styles.blogTitle}>{title}</h2>
                <span className={styles.blogDate}>{date}</span>
            </div>
            <div className={styles.blogContent}>
                {imageUrl ? <Image width={400} height={400} src={imageUrl} alt={title} className={styles.blogImage} /> :
                    videoUrl ? <video width={400} height={400} src={videoUrl} controls className={styles.blogImage} /> :
                        ytUrl && matches.length > 1 ? <iframe width={400} height={400} src={`https://youtube.com/embed/${matches[1]}`} allow="fullscreen" className={styles.blogImage}></iframe> : <></>}
                <p className={styles.blogDescription}>{description}</p>
            </div>
        </div>
    );
}




// "use client"

// import { useState } from 'react';
// import Modal from '@/components/Modal/Modal';
// import styles from './Blog.module.css';

// interface BlogProps {
//     title: string;
//     imageUrl: string;
//     description: string;
//     content: string;
// }

// export default function Blog({ title, imageUrl, description,content }: BlogProps) {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     return (
//         <div>
//             <div
//                 onClick={openModal}
//                 className="flex flex-col items-center max-w-md mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 cursor-pointer"
//             >
//                 <div className={`${styles.imageWrapper} w-full h-60 overflow-hidden`}>
//                     <img className="object-cover w-full h-full" src={imageUrl} alt={title} />
//                 </div>
//                 <div className="p-4">
//                     <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
//                     <p className="mt-2 text-gray-600">{description}</p>
//                 </div>
//             </div>

//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 title={title}
//                 description={description}
//                 imageUrl={imageUrl}
//                 content={content}
//             />
//         </div>
//     );
// }
