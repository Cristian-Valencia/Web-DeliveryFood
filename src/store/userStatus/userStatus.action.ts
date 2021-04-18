import { USER_STATUS } from './userStatus.type';

export const getUserStatus = (user:any) =>{
    return{
        type : USER_STATUS,
        payload : user
    }
}