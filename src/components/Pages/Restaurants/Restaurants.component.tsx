import React, { useEffect, useState } from 'react';
import styles from './Restaurants.module.css';
import { getListedRestaurants } from '../../../services/ListedRestaurantsService';
import { Link } from 'react-router-dom';



const Restaurants = () => {

    const [listedRestaurants, setListedRestaurants] = useState<any>("");

    useEffect(() => {

        getListedRestaurants()
            .then((data)=>{
                console.log(data);
                setListedRestaurants(data);
            })



    }, [])


    return (
        <div className = {styles.restaurantsContainer}>

            {
                listedRestaurants &&
                    listedRestaurants.map((el:any, index:number)=>{

                        return <Link to="/selectedRestaurant" key={index} className={styles.linkStyles}>
                                    {/* <div className={styles.restaurantsCard}> */}

                                        <div className={styles.cardImageContainer}>

                                            <img 
                                                src={`/images/cardRestaurantsImage/${el.Ristorante.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '')}.jpg`} 
                                                alt="RestaurantImage" 
                                                className={styles.cardImage}
                                            />

                                        </div>

                                        <div className={styles.descriptionContainer}>

                                            <div className={styles.logoContainer}>

                                                <img 
                                                    src={`/images/logoImages/${el.Ristorante.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '')}.gif`} 
                                                    alt="logoImage"
                                                    className={styles.logo}

                                                />
                                                <h3 className={styles.restaurantName}>{el.Ristorante}</h3>

                                            </div>

                                            <div className={styles.descriptionTitleContainer}>

                                                <h3 className={`${styles.description} ${styles.costiConsegna}`}>Costi Consegna: </h3>

                                                {
                                                    el.CostiConsegna !== "0" ? 
                                                    <h3 className={styles.descriptionResult}>€ {el.CostiConsegna}0</h3> 
                                                    : 
                                                    <h3 className={styles.descriptionResult}>Gratis</h3>
                                                }

                                                {/* <h3 className={styles.descriptionResult}>€ {el.CostiConsegna}</h3> */}

                                                <h3 className={`${styles.description} ${styles.ordineMinimo}`}>Ordine Minimo: </h3>

                                                <h3 className={styles.descriptionResult}>€ {el.OrdineMinimo}</h3>

                                                <h3 className={`${styles.description} ${styles.tempoConsegna}`}>Tempo Consegna: </h3>

                                                <h3 className={styles.descriptionResult}>{el.TempiConsegna} m</h3>

                                                <h3 className={`${styles.description} ${styles.tipologia}`}>Tipologia: </h3>

                                                <h3 className={styles.descriptionResult}>{el.tipologia.Tipologia}</h3>

                                            </div>


                                        

                                        </div>


{/* 
                                    </div> */}

                                </Link>
                    })
                
            }
        </div>
    )
}

export default Restaurants
