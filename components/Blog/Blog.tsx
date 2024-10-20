"use client"

import styles from './Blog.module.css'

interface BlogProps {
    title: string;
    imageUrl: string;
    description: string;
}

export default function Blog({ title, imageUrl, description }: BlogProps) {
    return (
        <div className={styles['blog-container']}>
            <div className={styles['blog-image']}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles['blog-content']}>
                <h2 className={styles['blog-title']}>{title}</h2>
                <p className={styles['blog-description']}>{description}</p>
            </div>
        </div>
    )
}
