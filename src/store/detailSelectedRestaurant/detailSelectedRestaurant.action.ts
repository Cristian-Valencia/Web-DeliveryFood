import { RESTAURANT_DETAIL } from './detailSelectedRestuarant.type';

export const getRestaurantDetail = (restaurant:any) =>{
    return{
        type : RESTAURANT_DETAIL,
        payload : restaurant
    }
}