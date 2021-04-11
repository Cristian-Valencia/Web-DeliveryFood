import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { getUrserOrder } from '../../../services/UserOrderService';

const Cart = () => {

    const [order, setOrder] = useState([])

    useEffect(() => {
        getUrserOrder()
            .then((data:any)=>{
                console.log(data);
                setOrder(data);
            })
    }, [])

    return (
        <div className={styles.cartContainer}>
            
            {
                order &&
                    order.map((el:any)=>{
                        return <div key={el.IdOrdine} className={styles.orderCard}>

                                    <h3>{el.CostiConsegna}</h3>
                                    <h3>{el.DataOrdine}</h3>
                                    <h3>{el.IndirizzoConsegna}</h3>
                                    <h3>{el.Ristorante}</h3>
                                    <h3>{el.Sconto}</h3>
                                    <h3>{el.TempiConsegna}</h3>


                               </div>
                    })
            }

        </div>
    )
}

export default Cart;
