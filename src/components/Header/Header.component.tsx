import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo-bianco.png';

const Header = () => {
    return (
        <nav className={styles.navBar}>

            <div>
                
                <img src={logo} alt=""/>

            </div>

            <div className={styles.hamburgerContainer}>

                <div className={styles.divOne}></div>

                <div className={styles.divOne}></div>

                <div className={styles.divOne}></div>

            </div>

        </nav>


    )
}

export default Header;