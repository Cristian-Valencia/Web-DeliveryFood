import { connect } from 'react-redux';
import DetailOrderPage from './DetailOrderPage.component'; 

const mapStateToProps = ( state : any ) => {
    return{
        idOrdine: state.idOrder
    }
}

// const mapDispatchToProps = (dispatch:any) =>{
//     return{
//         addLength: (detail:any) => dispatch(addCartLength(detail)),
//         removeLength: (detail:any, el:any) => dispatch(removeCartLength(detail))
//     }
// }

const DetailOrderPageContainer = connect(mapStateToProps)(DetailOrderPage);
export default DetailOrderPageContainer;