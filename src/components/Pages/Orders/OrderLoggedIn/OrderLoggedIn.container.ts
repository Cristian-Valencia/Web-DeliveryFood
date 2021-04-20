import { connect } from 'react-redux';
import { addCartDetail } from '../../../../store/cart/cart.action';
import { getIdOrder } from '../../../../store/idNewOrder/idNewOrder.action';
import OrderLoggedIn from './OrderLoggedIn.component';

const mapStateToProps = ( state : any ) => {
    return{
        userStatus: state.user
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        updateIdOrder: (detail:any) => dispatch(getIdOrder(detail)),
        addOnCart: (detail:any) => dispatch(addCartDetail(detail))
    }
}

const OrderLoggedInContainer = connect(mapStateToProps, mapDispatchToProps)(OrderLoggedIn);
export default OrderLoggedInContainer;