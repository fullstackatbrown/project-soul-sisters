import Blog from '@/components/Blog/Blog';
import styles from './page.module.css';
import cosmic from '@/lib/cosmicClient';

export default async function NewsPage() {
    const query = {
        type: "blogs",
      };
      let response = await cosmic.objects
        .find(query)
        .props("title,metadata");

    return (
        <div className={styles.newsPage}>
            <h1 className={styles.newsTitle}>News</h1>
            <div className={styles.newsList}>
                {response.objects.map((post: any, index: number) => (
                    <Blog
                        key={index}
                        title={post.title}
                        date={post.metadata.date}
                        imageUrl={post.metadata?.image?.url}
                        description={post.metadata.content}
                    />
                ))}
            </div>
        </div>
    );
}
