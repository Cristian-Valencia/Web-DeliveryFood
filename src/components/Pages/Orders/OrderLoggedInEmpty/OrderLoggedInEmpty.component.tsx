import React from 'react';
import styles from './OrderLoggedInEmpty.module.css';
import emptyCart from '../../../../assets/gif/emptyOrder.gif';
import { Link } from 'react-router-dom';


const OrderLoggedInEmpty = () => {
    return (
        <div className={styles.emptyOrderContainer}>

            <div className={styles.titleContainer}>

                <h3>Non ci sono Ordini</h3>

            </div>

            <div className={styles.cardMessageContainer}>

                <div className={styles.gifContainer}>
                    <div className={styles.gifSubContainer}>
                        <img src={emptyCart} alt="gif of an EmptyCart" className={styles.gifImage} />
                    </div>
                </div>


                <div className={styles.messageContainer}>

                    <p>Ti invitiamo a cercare un ristorante di tuo gradimento cliccando <Link to="/restaurants"> Qui </Link></p>

                </div>

            </div>


            
        </div>
    )
}

export default OrderLoggedInEmpty;
