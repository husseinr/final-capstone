import {GET_QTY_CART} from './types'

export const getQty = () => {
    return (dispatch) => {
        console.log('getting all cart qty');
        dispatch({
            type: GET_QTY_CART
        })
    }
}