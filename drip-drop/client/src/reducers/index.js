import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import coordinateReducer from './coordinateReducer';
import selectedCafeReducer from './selectedCafeReducer';
export default combineReducers({
    cartState: cartReducer,
    coordinateState: coordinateReducer,
    usersCafeState: selectedCafeReducer
});