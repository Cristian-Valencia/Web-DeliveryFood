import { CART_LENGTH } from './cartLength.type';
import { REMOVE_LENGTH } from './cartLength.type';

export const addCartLength = (cart:any) =>{
    return{
        type : CART_LENGTH,
        payload : cart
    }
}

export const removeCartLength = ( cart:any ) =>{
    return{
        type : REMOVE_LENGTH,
        payload : cart
    }
}