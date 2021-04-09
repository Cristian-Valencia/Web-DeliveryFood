import { connect } from 'react-redux';
import { getRestaurantDetail } from '../../../store/detailSelectedRestaurant/detailSelectedRestaurant.action';
import SelectedRestaurant from './SelectedRestaurant.component';

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

const SelectedRestaurantContainer = connect(mapStateToProps, mapDispatchToProps)(SelectedRestaurant);
export default SelectedRestaurantContainer;