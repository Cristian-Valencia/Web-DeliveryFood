import React from 'react';
import styles from './Home.module.css';
import backgroundImage from '../../../assets/images/background.jpg';


const Home = () => {
    return (
        <div className = {styles.homeContainer}>
            <img src={backgroundImage} className = {styles.backgroundImage} />
            <h1>Ciao sono la home</h1>
        </div>
    )
}

export default Home
