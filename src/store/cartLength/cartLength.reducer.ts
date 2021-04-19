import { CART_LENGTH } from './cartLength.type';
import { REMOVE_LENGTH } from './cartLength.type';

const initialState = {
    cart:[]
}

const cartLengthReducer = ( state = initialState, action : any ) =>{

    switch(action.type){
        case CART_LENGTH:

            return{
                cart: [...state.cart,action.payload]
            }

        case REMOVE_LENGTH:

            return{
                cart: [ ...action.payload ]
            }

        default : return state
    }
}

export default cartLengthReducer;