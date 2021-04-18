import { connect } from 'react-redux';
// import { getUserStatus } from '../../../store/userStatus/userStatus.action';
import Header from './Header.component';

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

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;