import Blog from '@/components/Blog/Blog'

export default function HomePage() {
    return (
        <div>
            {/* <h1>Welcome to Our Blog</h1> */}
            {/* Adding multiple Blog components */}
            <Blog
                title="First blog"
                imageUrl="https://plus.unsplash.com/premium_photo-1729017497963-ec4ec3458794?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="This is the first blog."
            />
            <Blog
                title="Introduction"
                imageUrl="https://images.unsplash.com/photo-1723727910134-f23d6b65ca12?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Start introduction..."
            />
            <Blog
                title="Soul Sisters"
                imageUrl="https://images.unsplash.com/photo-1729174619044-343719a24d19?q=80&w=2203&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description=""
            />
        </div>
    );
}
