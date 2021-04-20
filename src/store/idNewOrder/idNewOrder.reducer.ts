import { ID_ORDER } from './idNewOrder.type';

const initialState = {
    id: 1
}

const idOrderReducer = ( state = initialState, action : any ) =>{

    switch(action.type){
        case ID_ORDER:

            return{
                id: action.payload 
            }

        default : return state
    }
}

export default idOrderReducer;