import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import facebook from './../../assets/images/icons/facebookLogo.png';
import twitter from './../../assets/images/icons/twitterLogo.png';
import instagram from './../../assets/images/icons/instagramLogo.png';
import youtube from './../../assets/images/icons/youtubeLogo.png';
import paypal from './../../assets/images/icons/paypalLogo.png'
import visa from './../../assets/images/icons/visaLogo.png'
import mastercard from './../../assets/images/icons/masterCardLogo.png'


const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.submenuContainer}>
                <ul className={styles.submenuList}>
                    <li><Link to="/" className={styles.submenuLinks}>Home</Link></li>
                    <li><Link to="/restaurants" className={styles.submenuLinks}>Ristoranti</Link></li>
                    <li><Link to="/login" className={styles.submenuLinks}>Login/Registrazione</Link></li>
                </ul>
            </div>
            <div className={styles.socialIconsContainer}>

                <img src={facebook} alt="FacebookLogo"/>
                <img src={twitter} alt="TwitterLogo"/>
                <img src={instagram} alt="InstagramLogo"/>
                <img src={youtube} alt="YoutubeLogo"/>

            </div>
            <div className={styles.paymentContainer}>
                <img src={visa} alt="Visa's Logo" className={styles.payment}/>
                <img src={paypal} alt="Paypal's Logo" className={styles.payment}/>
                <img src={mastercard} alt="MasterCard's Logo" className={styles.payment}/>
            </div>
        </div>
    )
}

export default Footer
