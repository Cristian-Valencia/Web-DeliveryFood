import React from 'react';
import styles from './RegisterDone.module.css';
import foodGif from'../../../assets/gif/registerDone.gif';
import { Link } from 'react-router-dom';

const RegisterDone = () => {
    return (
        <div className={styles.registerDoneContainer}>

            <div className={styles.container}>

                {/* <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Vuoto!</h2>
                </div> */}

                <div className={styles.cardMessageContainer}>
                    
                    <div className={styles.gifContainer}>

                        <div className={styles.gifSubContainer}>

                            <img src={foodGif} alt="foodGif" className={styles.gifImage} />

                        </div>

                    </div>

                    <div className={styles.textContainer}>

                        <p>Congratulazioni ti sei registrato</p>

                        <Link to="/login" className={styles.linkLogin}>Clicca Qui per fare il Login</Link>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default RegisterDone;
