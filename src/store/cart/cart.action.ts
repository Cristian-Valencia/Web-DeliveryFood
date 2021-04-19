import { CART_DETAIL } from './cart.type';

export const addCartDetail = (cart:any) =>{
    return{
        type : CART_DETAIL,
        payload : cart
    }
}