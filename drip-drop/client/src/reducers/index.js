import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import coordinateReducer from './coordinateReducer'
export default combineReducers({
    cartState: cartReducer,
    coordinateState: coordinateReducer
});