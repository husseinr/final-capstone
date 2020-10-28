import {GET_QTY_CART} from './types'

export const getQty = () => {
    return (dispatch) => {

        dispatch({
            type: GET_QTY_CART
        })
    }
}