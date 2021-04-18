import { USER_STATUS } from './userStatus.type';

const initialState = {
    user:{}
}

const userStatusReducer = ( state = initialState, action : any ) =>{

    switch(action.type){
        case USER_STATUS:

            return{
                user: action.payload 
            }

        default : return state
    }
}
export default userStatusReducer;