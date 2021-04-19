import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ConfirmOrderLoggedOut.module.css';
import confirmLoggedOutGif from '../../../../assets/gif/confirmOrderLoggedOut.gif';

const ConfirmOrderLoggedOut = () => {
    return (
        <div className={styles.orderLoggedOutContainer}>
            <div className={styles.titleContainer}>

                <h3>Non sei Loggato</h3>

            </div>

            <div className={styles.cardMessageContainer}>

                <div className={styles.gifContainer}>
                    <div className={styles.gifSubContainer}>
                        <img src={confirmLoggedOutGif} alt="gif of an EmptyCart" className={styles.gifImage} />
                    </div>
                </div>


                <div className={styles.messageContainer}>

                    <p>Ti invitiamo a fare il Login cliccando <Link to="/login"> Qui </Link></p>

                </div>

            </div>
        </div>
    )
}

export default ConfirmOrderLoggedOut;
