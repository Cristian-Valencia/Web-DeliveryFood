import React from 'react';
import styles from './OrderLoggedOut.module.css';
import noProfile from '../../../../assets/gif/searching.gif';
import { Link } from 'react-router-dom';

const OrderLoggedOut = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.titleContainer}>
                <h2>Mi Spiace!</h2>
            </div>

            <div className={styles.cardMessageContainer}>
                
                <div className={styles.gifContainer}>

                    <div className={styles.gifSubContainer}>

                        <img src={noProfile} alt="noProfileGif" className={styles.gifImage} />

                    </div>

                </div>

                <div className={styles.textContainer}>

                    <p>Per controllare gli ordini devi prima entrare nel tuo Account</p>

                    <Link to="/login" className={styles.linkLogin}>Clicca Qui</Link>

                </div>
            </div>


        </div>
    )
}

export default OrderLoggedOut;
