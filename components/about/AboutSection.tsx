import Navbar from '@/components/Navbar/Navbar'
import styles from '@/components/Navbar/Navbar.module.css'

const AboutSection = () => {
    return (
        <div className="min-h-screen bg-black flex justify-center text-white">
            <div className="max-w-screen-lg flex p-8 space-x-4">
                <div className="w-3/5 pr-4">
                    <p className="leading-relaxed">INSERT TEXT HERE</p>
                </div>
                <div className="w-2/5 pl-4">
                    {/** Need to add photos */}
                    <img src="ADD SRC FILE" alt="film-picture" className="object-cover w-full h-full"/>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;