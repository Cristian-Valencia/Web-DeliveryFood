import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoggedError.module.css';

const LoggedError = (props:any) => {

    const retryBtn = () =>{
        props.setLogError(false);
        props.setUserName("");
        props.setPassword("");
    }

    return (
        <div className={styles.loggedErrorContainer}>

            <div className={styles.messageContainer}>

                <h2 className={styles.loggedErrorMessage}>Dati non validi</h2>

                <button className={styles.retrybtn} onClick={retryBtn}>Riprova</button>   

            </div>



        </div>
    )
}

export default LoggedError;
