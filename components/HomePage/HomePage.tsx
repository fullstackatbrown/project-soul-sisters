import styles from './HomePage.module.css'

export default function HomePage() {
    const testVidSrc ``= (): string => {
        return 'https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4';
    }
    return (
        <div className={styles[`home-container`]}>
            
            <video autoPlay muted loop className={styles[`background-video`]}>
                <source src={testVidSrc()} type="video/mp4" />
            </video>
            <div className={styles[`content`]}>
            <h1 className={styles[`heading`]}>Welcome to Soul Sisters</h1>
            <p>
                Soul Sisters is a non-profit organization that provides support
            </p>
            </div>
        </div>
    )
}