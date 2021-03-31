import React, { useEffect, useState } from 'react';
import styles from './SelectedRestaurant.module.css';
import { getProducts } from '../../../services/ListedProductsService';
import restaurantImage from '../../../assets/images/NonnachePizza.jpg';
import restaurantLogo from '../../../assets/images/NonnachePizza.gif';


const SelectedRestaurant = () => {

    const [pizza, setPizza] = useState([]);
    const [bibite, setBibite] = useState([]);
    const [restaurantName, setRestaurantName ] = useState("");

    useEffect(() => {
        
        getProducts()
            .then((data)=>{
                data.sort((a:any, b:any)=> a.IdProdotto - b.IdProdotto);
                setPizza(data.filter((el:any)=> el.IdProdotto < 11));
                setBibite(data.filter((el:any) => el.IdProdotto > 11));
                setRestaurantName(data[0].Ristorante);
            })

    }, [])

    console.log(pizza);
    console.log(bibite);

    

    return (
        <div className = {styles.selectedRestaurantContainer}>

            <div className={styles.selectedRestaurantHead}>
                <div className={styles.imageContainer}>
                    <img src={restaurantImage} alt="background img" className={styles.backgroundImage} />
                    <img src={restaurantLogo} alt="logo" className={styles.logoImage}/>
                </div>
                <div className={styles.descriptionRestaurantContainer}>

                    {
                        pizza &&
                            <h2 className={styles.restaurantName}>{restaurantName}</h2>
                    }

                    <p className={styles.restaurantDescription}>
                        Sempre attenti alla qualità degli ingredienti utilizzando solo prodotti di prima qualità,
                        ci rende orgogliosi e molto apprezzati dalla nostra affezionata clientela.
                        L’ottimo rapporto qualità/prezzo è ciò che ci ha sempre contraddistinto.
                    </p>

                </div>
            </div>

            <div className={styles.productsContainer}>

                <h2 className={styles.pizzaTitle}>Pizze</h2>

                {
                    pizza &&
                        pizza.map((el:any)=>{
                            return <div className={styles.pizzaCard} key={el.IdProdotto}>

                                        <div className={styles.pizzaDescriptionContainer}>

                                            <h3 className={styles.nomePizza}>{el.Prodotto}</h3>
                                            <h3 className={styles.descrizionePizza}>{el.Descrizione}</h3>
                                            <h3 className={styles.prezzoPizza}>{el.Prezzo} €</h3>

                                        </div>

                                        <div className={styles.addButtonContainer}>

                                            <button>+</button>

                                        </div>

                                        

                                   </div>
                        })
                }
            </div>

            <div>

                <h2>Bibite</h2>

                {
                    bibite &&
                        bibite.map((el:any)=>{
                            return <div className={styles.drinksCard} key={el.IdProdotto}>

                                        <div>

                                            <h3>{el.Prodotto}</h3>
                                            <h3>{el.Descrizione}</h3>
                                            <h3>{el.Prezzo}</h3>

                                        </div>

                                        <div>

                                            <button>+</button>

                                        </div>



                                   </div>
                        })
                }

            </div>
        </div>
    )
}

export default SelectedRestaurant
