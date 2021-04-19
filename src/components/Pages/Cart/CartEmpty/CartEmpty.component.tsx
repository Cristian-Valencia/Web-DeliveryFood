import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.css';
import empty from '../../../../assets/gif/emptyCart.gif';

const CartEmpty = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Vuoto!</h2>
            </div>

            <div className={styles.cardMessageContainer}>
                
                <div className={styles.gifContainer}>

                    <div className={styles.gifSubContainer}>

                        <img src={empty} alt="noProfileGif" className={styles.gifImage} />

                    </div>

                </div>

                <div className={styles.textContainer}>

                    <p>Hai il Carrello vuoto</p>

                    <Link to="/restaurants" className={styles.linkLogin}>Clicca Qui per i Ristoranti</Link>

                </div>
            </div>


        </div>
    )
}

export default CartEmpty;
