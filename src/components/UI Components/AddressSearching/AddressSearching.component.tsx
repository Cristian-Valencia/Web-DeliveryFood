import React from 'react';
import styles from './AddressSearch.module.css'

const AddressSearching = () => {
    return (
        <div className={styles.addressSearchingBox}>

            <div className={styles.container}>

                <input type="text" placeholder = "Inserisci Indirizzo, Via del ..." className={styles.input}/>

                <div className={styles.button}>
                    <p className={styles.searchWord}>Cerca</p>
                </div>

            </div>

            
            
        </div>
    )
}

export default AddressSearching
