import { connect } from 'react-redux';
import { getUserStatus } from '../../../store/userStatus/userStatus.action';
import Login from './Login.component';

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

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;