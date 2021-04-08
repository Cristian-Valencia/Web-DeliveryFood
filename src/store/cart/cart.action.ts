import { CART_DETAIL } from './cart.type';

export const getCartDetail = (cart:any) =>{
    return{
        type : CART_DETAIL,
        payload : cart
    }
}