import { connect } from 'react-redux';
import CartFull from './CartFull.component'; 
import { addCartLength } from '../../../../store/cartLength/cartLength.action';
import { removeCartLength } from '../../../../store/cartLength/cartLength.action';

const mapStateToProps = ( state : any ) => {
    return{
        cartDetail : state.cartDetail,
        cartLength : state.cartLength
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        addLength: (detail:any) => dispatch(addCartLength(detail)),
        removeLength: (detail:any, el:any) => dispatch(removeCartLength(detail))
    }
}

const CartFullContainer = connect(mapStateToProps, mapDispatchToProps)(CartFull);
export default CartFullContainer;