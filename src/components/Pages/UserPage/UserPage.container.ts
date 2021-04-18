import { connect } from 'react-redux';
import { getUserStatus } from '../../../store/userStatus/userStatus.action';
import UserPage from './UserPage.component';

const mapStateToProps = ( state : any ) => {
    return{
        userStatus: state.user
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        loginUpdate: (detail:any) => dispatch(getUserStatus(detail))
    }
}

const UserPageContainer = connect(mapStateToProps,mapDispatchToProps)(UserPage);
export default UserPageContainer;