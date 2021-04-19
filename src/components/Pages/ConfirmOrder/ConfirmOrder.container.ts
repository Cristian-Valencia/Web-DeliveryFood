import { connect } from 'react-redux';
import ConfirmOrder from './ConfirmOrder.component'; 

const mapStateToProps = ( state : any ) => {
    return{
        userStatus: state.user,
        cartDetail : state.cartDetail,
        cartLength : state.cartLength
    }
}

// const mapDispatchToProps = (dispatch:any) =>{
//     return{
//         addLength: (detail:any) => dispatch(addCartLength(detail)),
//         removeLength: (detail:any, el:any) => dispatch(removeCartLength(detail))
//     }
// }

const ConfirmOrderContainer = connect(mapStateToProps)(ConfirmOrder);
export default ConfirmOrderContainer;