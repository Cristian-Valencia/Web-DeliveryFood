import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartFull.module.css';

const CartFull = (props:any) => {

    let totale:any = [];

    let number:any;

    let [totNumber, setTotNumber] = useState(0);

    // console.log(props);

    const addOnCart = (el:any) =>{
        // console.log(el);
        props.addLength(el);
    }

    const removeFromCart = (el:any) =>{

        // let a = props.cartDetail.cart.indexOf(el)

        let a = props.cartLength.cart;

        let b = a.filter((e:any) => {return e === el}).splice(1);

        let c = a.filter((e:any) =>{return e !== el});

        let d = [ ...b, ...c ] ;

        props.removeLength(d);

    }

    const quantita = (e:any) =>{
        return props.cartLength.cart.filter((product:any)=>{ return e === product }).length;
    }

    props.cartDetail.cart.map((el:any)=>{

        let a = props.cartLength.cart.filter((e:any)=> el=== e).length;

        let b = el.Prezzo;

        let c = a*b;

        totale.push(c)

        return("ciao");

    });

    

    const sum = (total:any, sum:any) =>{
        return total + sum 
    }

    useEffect(() => {

        if (totale.length > 0){
            number = totale.reduce(sum)
        }

        setTotNumber(number)

    }, [totale])

    return (
        <div className={styles.container}>

            {
                props.cartDetail.cart &&
                    props.cartDetail.cart.map((el:any, i:number)=>{
                        return <div key={i} className={styles.productContainer}>

                                    <div className={styles.productInformationContainer}>

                                        <h3 className={styles.productName}>{el.Prodotto}</h3>

                                        <p className={styles.descriptionProduct}>{el.Descrizione}</p>

                                        <h3 className={styles.price}>{el.Prezzo} €</h3>

                                    </div>

                                    <div className={styles.quantityContainer}>

                                        <div className={styles.addButton} onClick={()=> addOnCart(el)}>+</div>

                                            <p className={styles.quantity} >
                                                {
                                                    quantita(el)
                                                }
                                            </p>

                                        <div className={styles.removebutton} onClick={() => removeFromCart(el)}>-</div>

                                    </div>





                               </div>
                    })
            }

            <div className={styles.totalContainer}>

                <h2 className={styles.totalTitle}>Totale: </h2>

                <p className={styles.totalNumber}>{totNumber} €</p>

            </div>

            <div className={styles.proceedContainer}>

                <Link to="/confirmOrderPage" className={styles.confirmLink}>Procedi All'Ordine</Link>

            </div>

        </div>
    )
}

export default CartFull;
