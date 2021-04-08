import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import restaurantDetailReducer from './detailSelectedRestaurant/detailSelectedRestaurant.reducer';
import cartReducer from './cart/cart.reducer';


const rootReducer = combineReducers({
    restaurantDetail : restaurantDetailReducer,
    cartDetail : cartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;