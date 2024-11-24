import NewsBox from '@/components/news/NewsBox'

const News = () => {
    return (
        <div className="min-h-screen bg-black flex-row text-white">
            <NewsBox
                title="TEST"
                dateTime="TEST"
                imageSrc="TEST"
                content="TEST"
            />
        </div>
    );
}