import Navbar from '@/components/Navbar/Navbar'
import styles from '@/components/Navbar/Navbar.module.css'

const AboutSection = () => {
    return (
        <div className="min-h-screen bg-black flex-row text-white">
            {/** INSERT CORRECTED NAVBAR COMPONENTS */}
            {/** <Navbar/> */}
            {/** 5/6 ASSUMES THAT NAVBAR TAKES UP 1/6 OF PAGE */}
            <Navbar/>
            <div className="w-5/6 flex-row p-8">
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