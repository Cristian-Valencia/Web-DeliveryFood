import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AddressSearch.module.css'

const AddressSearching = () => {
    return (
        <div className={styles.addressSearchingBox}>

            <div className={styles.container}>

                <input type="text" placeholder = "Inserisci Indirizzo, Via del ..." className={styles.input}/>

                {/* <div className={styles.button}>
                    <p className={styles.searchWord}>Cerca</p>
                </div> */}

                <Link to="/restaurants" className={styles.button}>Cerca</Link>


            </div>

            
            
        </div>
    )
}

export default AddressSearching
