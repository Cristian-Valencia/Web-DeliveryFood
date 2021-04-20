import { connect } from 'react-redux';
import Cart from './Cart.component';

const mapStateToProps = ( state : any ) => {
    return{
        cartDetail : state.cartLength
    }
}

const CartContainer = connect(mapStateToProps)(Cart);
export default CartContainer;