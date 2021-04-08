import { connect } from 'react-redux';
import { getRestaurantDetail } from '../../../store/detailSelectedRestaurant/detailSelectedRestaurant.action';
import Restaurants from './Restaurants.component';

const mapStateToProps = ( state : any ) => {
    return{
        detailRestaurant: state.restaurantDetail
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        restaurantUpdate: (detail:any) => dispatch(getRestaurantDetail(detail))
    }
}

const RestaurantsContainer = connect(mapStateToProps, mapDispatchToProps)(Restaurants);
export default RestaurantsContainer;