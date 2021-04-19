import { connect } from 'react-redux';
import ConfirmOrderLoggedIn from './ConfirmOrderLoggedIn.component'; 

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

const ConfirmOrderLoggedInContainer = connect(mapStateToProps)(ConfirmOrderLoggedIn);
export default ConfirmOrderLoggedInContainer;