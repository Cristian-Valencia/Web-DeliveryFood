import React, { useEffect, useState } from 'react';
import styles from './DetailOrderPage.module.css';
import { getDetailOrder } from '../../../services/UserDetailOrderService';

const DetailOrderPage = () => {

    const [detailOrder, setDetailOrder] = useState<any>([]);

    const [quantityOrder, setQuantityOrder] = useState<any>([]);

    const [quantity, setQuantity] = useState()

    useEffect(() => {

        getDetailOrder()
            .then((data:any)=>{
                setDetailOrder(data);
                console.log(data)
                setQuantityOrder(data);
            })
        
    }, [])

    const quantita = (e:any) =>{
        return quantityOrder.filter((product:any)=>{ return e===product }).length;
    }

    const addOnCart = (e:any) =>{
        quantityOrder.push(e);
        console.log(quantityOrder.filter((product:any)=>{ return e===product }).length)
    }

    const removeFromCart = (e:any) =>{
        quantityOrder.splice(quantityOrder.indexOf(e), 1);
    }

    const demoCheck = (el:any) =>{
        console.log(quantityOrder)
    }

    return (
        <div className={styles.detailOrderContainer}>

            {
                detailOrder &&
                    detailOrder.map((el:any, i:number)=>{
                        return <div key={i} className={styles.productContainer}>

                                    <div className={styles.productInformationContainer}>

                                        <h3 className={styles.productName}>{el.Prodotto}</h3>

                                        <p className={styles.descriptionProduct}>{el.Descrizione}</p>

                                        <h3 className={styles.price}>{el.Prezzo}€</h3>

                                    </div>

                                    <div className={styles.quantityContainer}>

                                        <div className={styles.addButton} onClick={()=> addOnCart(el)}>+</div>

                                            <p className={styles.quantity} onClick={() => demoCheck(el)}>
                                                {
                                                    quantita(el)
                                                }
                                            </p>

                                        <div className={styles.removebutton} onClick={() => removeFromCart(el)}>-</div>

                                    </div>

                               </div>
                    })
            }

            <div>
                <h3>Totale</h3>

            </div>
            
        </div>
    )
}

export default DetailOrderPage;
