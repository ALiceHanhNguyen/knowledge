import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    homeData: homeReducer,
    categoryData: categoryReducer
});