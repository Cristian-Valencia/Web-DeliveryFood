import { RESTAURANT_DETAIL } from './detailSelectedRestuarant.type';

const initialState = {
    restuarant:{}
}

const restaurantDetailReducer = ( state = initialState, action : any ) =>{

    switch(action.type){
        case RESTAURANT_DETAIL:

            return{
                restaurant: action.payload 
            }

        default : return state
    }
}

export default restaurantDetailReducer;