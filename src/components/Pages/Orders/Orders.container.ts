import { connect } from 'react-redux';
// import { getUserStatus } from '../../../store/userStatus/userStatus.action';
import Orders from './Orders.component';

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

const OrdersContainer = connect(mapStateToProps)(Orders);
export default OrdersContainer;