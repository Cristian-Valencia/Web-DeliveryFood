import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import restaurantDetailReducer from './detailSelectedRestaurant/detailSelectedRestaurant.reducer';
import cartReducer from './cart/cart.reducer';
import userStatusReducer from './userStatus/userStatus.reducer';
import cartLengthReducer from './cartLength/cartLength.reducer';


const rootReducer = combineReducers({
    restaurantDetail : restaurantDetailReducer,
    cartDetail : cartReducer,
    cartLength: cartLengthReducer,
    user: userStatusReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;