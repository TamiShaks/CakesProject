import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cakesReducer } from './reducers';
import {ShopingCartReducer, invitedCakeList} from './ShopingCartReducer'




const rootReducer= combineReducers({
    cakesList:cakesReducer,
    invitedCakeList:ShopingCartReducer,
})

export const store=configureStore({reducer:cakesReducer},{reducer:ShopingCartReducer});
export default store;