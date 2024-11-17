import Blog from '@/components/Blog/Blog';
import TeamPage from '@/components/TeamPage/TeamPage';

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            {/* Blog Section */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Blog
                    title="About"
                    imageUrl="https://plus.unsplash.com/premium_photo-1729017497963-ec4ec3458794?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    description="About us.... Perhaps read further here???."
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula diam at 
                    justo dignissim, id scelerisque tortor aliquet. Nam et varius erat, sit amet 
                    fermentum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                    posuere cubilia curae; Fusce auctor turpis ac vehicula faucibus. Sed sit amet 
                    cursus ligula. Cras at ligula non dui egestas fringilla in ut augue.'
                />
            </div>

            {/* TeamPage Header */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-16">Team Page</h2>

            {/* TeamPage Section */}
            <div className="grid gap-8 grid-cols-2 mt-10">
                <TeamPage
                    title="Director"
                    imageUrl="https://example.com/image1.jpg"
                    content="name."
                />
                <TeamPage
                    title="Writer"
                    imageUrl="https://example.com/image2.jpg"
                    content="writer"
                />
                <TeamPage
                    title="Producer"
                    imageUrl="https://example.com/image3.jpg"
                    content="prod."
                />
                <TeamPage
                    title="starring"
                    imageUrl="https://example.com/image4.jpg"
                    content="starring."
                />
            </div>
        </div>
    );
}
