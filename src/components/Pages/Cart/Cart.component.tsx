import React from 'react';
import styles from './Cart.module.css';
import CartEmpty from './CartEmpty/CartEmpty.component';
import CartFull from './CartFull/CartFull.container';

const Cart = (props:any) => {

    return (
        <div className={styles.cartContainer}>

            {
                
                props.cartDetail.cart.length > 0 ? <CartFull /> : <CartEmpty />

            }
            
        </div>
    )
}

export default Cart;
