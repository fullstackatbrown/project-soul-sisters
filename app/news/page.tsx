import Blog from '@/components/Blog/Blog';
import styles from './page.module.css';

export default function NewsPage() {
    const posts = [
        {
            title: 'First Blog Post',
            date: 'November 10, 2024',
            imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
            description: 'This is the content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. blah blah blah blah blah blah blah blah blah blah blah',
        },
        {
            title: 'Second Blog Post',
            date: 'October 31, 2024',
            imageUrl: 'https://images.unsplash.com/photo-1723727910134-f23d6b65ca12?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'This is the content of second post.'
        }
    ];

    return (
        <div className={styles.newsPage}>
            <h1 className={styles.newsTitle}>News</h1>
            <div className={styles.newsList}>
                {posts.map((post, index) => (
                    <Blog
                        key={index}
                        title={post.title}
                        date={post.date}
                        imageUrl={post.imageUrl}
                        description={post.description}
                    />
                ))}
            </div>
        </div>
    );
}
