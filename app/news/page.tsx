import Blog from '@/components/Blog/Blog';
import styles from './page.module.css';
import cosmic from '@/lib/cosmicClient';
import { Suspense } from 'react';

export default async function NewsPage() {
    const query = {
        type: "blogs",
    };
    const response = await cosmic.objects
        .find(query)
        .props("title,metadata");

    console.log(JSON.stringify(response));

    return (
        <Suspense fallback={<div></div>}>
            <div className={styles.newsPage}>
                <h1 className={styles.newsTitle}>News</h1>
                <div className={styles.newsList}>
                    {response.objects.map((post: { title: string; metadata: { date: string; image: { url: string; }; video: { url: string; }; "youtube-video": string; content: string; }; }, index: number) => (
                        <Blog
                            key={index}
                            title={post.title}
                            date={post.metadata.date}
                            imageUrl={post.metadata?.image?.url}
                            videoUrl={post.metadata?.video?.url}
                            ytUrl={post.metadata?.["youtube-video"]}
                            description={post.metadata.content}
                        />
                    ))}
                </div>
            </div>
        </Suspense>
    );
}
