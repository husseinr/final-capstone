import {ADD_PRODUCT_CART, GET_QTY_CART} from '../actions/types';

const initialState = {
    cartQty: 0
}

export default(state = initialState, action)=> {
    switch(action.type) {
        case ADD_PRODUCT_CART:
            return {
                cartQty: state.cartQty + 1
            }
            case GET_QTY_CART:
                return {
                    ...state
                }
        default:
            return state;
    }
}