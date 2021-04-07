import React from 'react';
import styles from './Download.module.css';
import mockup from '../../../assets/images/mockup.png';
import applestore from '../../../assets/images/icons/appleStore.png';
import googlePlay from '../../../assets/images/icons/googlePlay.png';

const Download = () => {



    return (
        <div className={styles.downloadMobileContainer}>
            <div className={styles.mockupContainer}>
                <img src={mockup} alt="AppMobile" className={styles.mockupImage} />
            </div>
            <div className={styles.storeContainer}>

                <a href="https://play.google.com/store?hl=it&gl=US" className={styles.appleContainer}>
                    <img src={applestore} alt="AppleStore Button" className={styles.appleStore}/>
                </a>

                <a href="https://www.apple.com/it/shop" className={styles.googleContainer}>
                    <img src={googlePlay} alt="GooglPlay button" className={styles.googlePlay}/>
                </a>
                
                
            </div>
        </div>
    )
}

export default Download
