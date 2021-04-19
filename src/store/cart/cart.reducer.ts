import { CART_DETAIL } from './cart.type';

const initialState = {
    cart:[]
}

const cartReducer = ( state = initialState, action : any ) =>{

    switch(action.type){
        case CART_DETAIL:

            return{
                cart: [...state.cart,action.payload]
            }

        default : return state
    }
}

export default cartReducer;