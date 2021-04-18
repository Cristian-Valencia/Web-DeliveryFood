import React from 'react';
import styles from './LogOut.module.css';
import { Link } from 'react-router-dom';

const LogOutMessage = () => {
    return (
        <div className={styles.logOutContainer}>

            <div className={styles.messageContainer}>

                <h2 className={styles.logOutMessage}>LogOut Effettuato</h2>

                <Link 
                    to = "/login" 
                    className={styles.loginLink}
                >Torna al Login
                </Link>        

            </div>



        </div>
    )
}

export default LogOutMessage;
