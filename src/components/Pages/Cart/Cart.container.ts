import { connect } from 'react-redux';
// import { addCartDetail } from '../../../store/cart/cart.action';
import Cart from './Cart.component';

const mapStateToProps = ( state : any ) => {
    return{
        cartDetail : state.cartDetail
    }
}


const CartContainer = connect(mapStateToProps)(Cart);
export default CartContainer;