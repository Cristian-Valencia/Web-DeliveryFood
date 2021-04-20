import React, { useEffect } from 'react';
import styles from './Cart.module.css';
import shoppingBag from '../../../assets/images/icons/shopping-bag.svg';
import { Link } from 'react-router-dom';
import { addNewOrder } from '../../../services/AddNewOrderService';


const Cart = (props:any) => {

    // console.log(props.cartDetail.cart.length)

    return (

        <Link to="/cart" className={styles.shoppingBagContainer}>

            <img src={shoppingBag} alt="shoppingBagImage" className={styles.shoppingBag} />
            
        </Link>
    )
}

export default Cart;
