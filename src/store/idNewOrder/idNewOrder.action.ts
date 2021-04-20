import { ID_ORDER } from './idNewOrder.type';

export const getIdOrder = (id:any) =>{
    return{
        type : ID_ORDER,
        payload : id
    }
}