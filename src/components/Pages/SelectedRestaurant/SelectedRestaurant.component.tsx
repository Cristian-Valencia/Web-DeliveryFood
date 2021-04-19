import React, { useEffect, useState } from 'react';
import styles from './SelectedRestaurant.module.css';
import { getProducts } from '../../../services/ListedProductsService';
import BackArrow from '../../UI Components/BackArrow/BackArrow.component';
import Cart from '../../UI Components/Cart/Cart.container';


const SelectedRestaurant = (props:any) => {

    console.log(props)

    const [menu, setMenu] = useState([]);
    const [bibite, setBibite] = useState([]);


    useEffect(() => {
        
        getProducts(props.detailRestaurant.restaurant.IdRistorante)
            .then((data)=>{
                console.log(data)
                data.sort((a:any, b:any)=> a.IdProdotto - b.IdProdotto);
                setMenu(data.filter((el:any)=> el.IdProdotto < 31));
                setBibite(data.filter((el:any) => el.IdProdotto > 30));
            });

    },[])

    const lookAtTheProducts = (product:any) =>{

        if(props.cartDetail.cart.includes(product)){
            props.addOnLength(product);
        } else{
            props.addOnCart(product);
            props.addOnLength(product);
        }

        console.log(props)

        
    }
    
    return (
        <div className = {styles.selectedRestaurantContainer}>

            

            <BackArrow />

            <div className={styles.selectedRestaurantHead}>
                <div className={styles.imageContainer}>
                    {/* <img src={restaurantImage} alt="background img" className={styles.backgroundImage} /> */}

                    {
                        props.detailRestaurant.restaurant &&
                            <div 
                                className={styles.imageBackground} 
                                style={{backgroundImage : `url(/images/cardRestaurantsImage/${props.detailRestaurant.restaurant.Ristorante.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '')}.jpg)`}}>
                            </div>
                    }
                    
                    {/* <img src={restaurantLogo} alt="logo" className={styles.logoImage}/> */}
                </div>
                <div className={styles.descriptionRestaurantContainer}>

                    {
                        props.detailRestaurant.restaurant &&
                            <h2 className={styles.restaurantName}>{props.detailRestaurant.restaurant.Ristorante}</h2>
                    }

                    <p className={styles.restaurantDescription}>
                        Sempre attenti alla qualità degli ingredienti utilizzando solo prodotti di prima qualità,
                        ci rende orgogliosi e molto apprezzati dalla nostra affezionata clientela.
                        L’ottimo rapporto qualità/prezzo è ciò che ci ha sempre contraddistinto.
                    </p>

                </div>
            </div>
 
            <div className={styles.productsContainer}>

                <h2 className={styles.pizzaTitle}>Menù</h2>

                {
                    menu &&
                        menu.map((el:any)=>{
                            return <div className={styles.pizzaCard} key={el.IdProdotto}>

                                        <div className={styles.pizzaDescriptionContainer}>

                                            <h3 className={styles.nomePizza}>{el.Prodotto}</h3>
                                            <h3 className={styles.descrizionePizza}>{el.Descrizione}</h3>

                                            {
                                                el.Prezzo.includes('.') ?
                                                <h3 className={styles.prezzoPizza}>{el.Prezzo}0 €</h3>
                                                :
                                                <h3 className={styles.prezzoPizza}>{el.Prezzo} €</h3>
                                            }

                                        </div>

                                        <div className={styles.addButtonContainer}>

                                            <div className={styles.addButton} onClick={()=>lookAtTheProducts(el)}>+</div>

                                        </div>

                                        

                                   </div>
                        })
                }
            </div> 

            <div className={styles.productsDrinksContainer}>

                <h2 className={styles.drinkTitle}>Bibite</h2>

                {
                    bibite &&
                        bibite.map((el:any)=>{
                            return <div className={styles.drinksCard} key={el.IdProdotto}>

                                        <div className={styles.drinksDescriptionContainer}>

                                            <h3 className={styles.drinkName}>{el.Prodotto}</h3>
                                            <h3 className={styles.drinkDescription}>{el.Descrizione}</h3>

                                            {
                                                el.Prezzo.includes('.') ?
                                                    <h3 className={styles.drinkPrice}>{el.Prezzo}0 €</h3>
                                                    :
                                                    <h3 className={styles.drinkPrice}>{el.Prezzo} €</h3>
                                            }

                                        </div>

                                        <div className={styles.addButtonContainer}>

                                            <div className={styles.addButton} onClick={()=>lookAtTheProducts(el)}>+</div>

                                        </div>



                                   </div>
                        })
                }

            </div>

            <Cart />

        </div>
    )
}

export default SelectedRestaurant
