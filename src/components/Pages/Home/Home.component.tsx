import React from 'react';
import styles from './Home.module.css';
import backgroundImage from '../../../assets/images/background.jpg';
import AddressSearching from '../../UI Components/AddressSearching/AddressSearching.component';
import CarouselComponent from '../../UI Components/Carousel/Carousel.component';
import Download from '../../UI Components/Download/Download.component';


const Home = () => {
    return (
        <div className = {styles.homeContainer}>

            <div className={styles.headerImageContainer}>

                <h1 className={styles.title}>Vuoi mangiare qualcosa di buono?</h1>

                <h2 className={styles.subTitle}>Ordinalo subito.</h2>

                <img src={backgroundImage} className = {styles.backgroundImage} alt="Background" />

                <AddressSearching />

            </div>

            <div className={styles.carouselContainer}>

                <h2 className={styles.carouselTitle}>I nostri Ristoranti: </h2>

                <div className={styles.carouselSubContainer}>

                    <CarouselComponent />

                </div>

                <div className={styles.littleInformationContainer}>

                    <h2 className={styles.littleInformationTitle}>Le Cucine più amate</h2>

                    <p className={styles.littleInformationDescription}>Trova le cucine più amate dai ristoranti nella tua zona e ordina online a domicilio.</p>

                </div>



                

            </div>


            <div className={styles.downloadAppContainer}>

                <h2 className={styles.downloadTitle}>Scarica la nostra App</h2>

                <Download />

            </div>
            
            
        </div>
    )
}

export default Home
