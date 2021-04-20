import React, { useEffect, useState } from 'react';
import styles from './Orders.module.css';
import { getUrserOrder } from '../../../services/UserOrderService';
import { Link } from 'react-router-dom';
import OrderLoggedIn from './OrderLoggedIn/OrderLoggedIn.container';
import OrderLoggedOut from './OrderLoggedOut/OrderLoggedOut.component';
import OrderLoggedInEmpty from './OrderLoggedInEmpty/OrderLoggedInEmpty.component';

const Order = (props:any) => {

    // props.userStatus.user.IdUtente

    const [orderLength, setOrderLength] = useState<any>(0)

    // console.log(props)

    if(props.userStatus.user.IdUtente){
        getUrserOrder(props.userStatus.user.IdUtente)
            .then((data:any)=>{
                setOrderLength(data.length);
                // console.log(orderLength)
            })
    }



    return (
        <div className={styles.cartContainer}>

            {
                props.userStatus.user.IdUtente 
                
                ?
                
                orderLength > 0 ? <OrderLoggedIn /> : <OrderLoggedInEmpty/>
                
                :

                <OrderLoggedOut />
                
            }
            

            
        </div>
    )
}

export default Order;
