import { connect } from 'react-redux';
// import { getUserStatus } from '../../../store/userStatus/userStatus.action';
import OrderLoggedIn from './OrderLoggedIn.component';

const mapStateToProps = ( state : any ) => {
    return{
        userStatus: state.user
    }
}

// const mapDispatchToProps = (dispatch:any) =>{
//     return{
//         loginUpdate: (detail:any) => dispatch(getUserStatus(detail))
//     }
// }

const OrderLoggedInContainer = connect(mapStateToProps)(OrderLoggedIn);
export default OrderLoggedInContainer;