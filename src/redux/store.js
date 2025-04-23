import { configureStore } from '@reduxjs/toolkit'
import { cakesReducer } from './reducers';
 
export const store=configureStore({reducer:cakesReducer});
export default store;