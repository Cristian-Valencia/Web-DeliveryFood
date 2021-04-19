import { connect } from 'react-redux';
import { addCartDetail } from '../../../store/cart/cart.action';
import { addCartLength } from '../../../store/cartLength/cartLength.action';
import SelectedRestaurant from './SelectedRestaurant.component';

const mapStateToProps = ( state : any ) => {
    return{
        detailRestaurant: state.restaurantDetail,
        cartDetail : state.cartDetail
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        addOnCart: (detail:any) => dispatch(addCartDetail(detail)),
        addOnLength : (detail:any) => dispatch(addCartLength(detail))
    }
}

const SelectedRestaurantContainer = connect(mapStateToProps, mapDispatchToProps)(SelectedRestaurant);
export default SelectedRestaurantContainer;