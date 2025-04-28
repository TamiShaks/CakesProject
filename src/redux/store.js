import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cakesReducer } from './reducers'; // Ensure this path is correct
import { ShopingCartReducer } from './ShopingCartReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
    cakesList: cakesReducer,
    invitedCakeList: ShopingCartReducer,
});

// Correctly pass rootReducer as `reducer`
export const store = configureStore({ reducer: rootReducer });
export default store;