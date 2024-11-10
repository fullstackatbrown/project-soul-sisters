// "use client"

// import styles from './blog.module.css';

// interface BlogProps {
//     title: string;
//     imageUrl: string;
//     description: string;
// }

// export default function Blog({ title, imageUrl, description }: BlogProps) {
//     return (
//         <div className="flex flex-col items-center max-w-md mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
//             <div className={`${styles.imageWrapper} w-full h-60 overflow-hidden`}>
//                 <img className="object-cover w-full h-full" src={imageUrl} alt={title} />
//             </div>
//             <div className="p-4">
//                 <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
//                 <p className="mt-2 text-gray-600">{description}</p>
//             </div>
//         </div>
//     );
// }

"use client"

import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import styles from './Blog.module.css';

interface BlogProps {
    title: string;
    imageUrl: string;
    description: string;
    content: string;
}

export default function Blog({ title, imageUrl, description,content }: BlogProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div
                onClick={openModal}
                className="flex flex-col items-center max-w-md mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 cursor-pointer"
            >
                <div className={`${styles.imageWrapper} w-full h-60 overflow-hidden`}>
                    <img className="object-cover w-full h-full" src={imageUrl} alt={title} />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={title}
                description={description}
                imageUrl={imageUrl}
                content={content}
            />
        </div>
    );
}