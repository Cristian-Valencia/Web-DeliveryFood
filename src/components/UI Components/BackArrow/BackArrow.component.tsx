import React from 'react';
import styles from './BackArrow.module.css';
import back from '../../../assets/images/icons/arrow.svg';
import { Link } from 'react-router-dom';


const BackArrow = () => {
    return (
        <div className={styles.backArrowContainer}>
            <Link to="/restaurants" className={styles.backArrowLink}>
                <img src={back} alt="arrow" className={styles.arrowImage} />
                <h3 className={styles.arrowTitle}>Indietro</h3>
            </Link>
        </div>
    )
}

export default BackArrow;
