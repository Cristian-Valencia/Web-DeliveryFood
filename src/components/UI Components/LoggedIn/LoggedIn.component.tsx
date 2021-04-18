import React from 'react';
import styles from './LoggedIn.module.css';
import { Link } from 'react-router-dom';

const LoggedIn = () => {
    return (
        <div className={styles.loggedInContainer}>

            <div className={styles.messageContainer}>

                <h2 className={styles.loggedMessage}>Utente Loggato</h2>

                <Link 
                    to = "/userPage" 
                    className={styles.profileLink}
                >Procedi al Profilo
                </Link>        

            </div>



        </div>
    )
}

export default LoggedIn;
