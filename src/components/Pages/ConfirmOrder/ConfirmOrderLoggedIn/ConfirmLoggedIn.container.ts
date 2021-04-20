import { connect } from 'react-redux';
import ConfirmOrderLoggedIn from './ConfirmOrderLoggedIn.component'; 
import { getIdOrder } from '../../../../store/idNewOrder/idNewOrder.action';

const mapStateToProps = ( state : any ) => {
    return{
        userStatus: state.user,
        cartDetail : state.cartDetail,
        cartLength : state.cartLength
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        // addLength: (detail:any) => dispatch(addCartLength(detail)),
        // removeLength: (detail:any, el:any) => dispatch(removeCartLength(detail))
        updateOrder: (detail:any) => dispatch(getIdOrder(detail))
    }
}

const ConfirmOrderLoggedInContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmOrderLoggedIn);
export default ConfirmOrderLoggedInContainer;