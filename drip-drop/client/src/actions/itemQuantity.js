import {INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM, INCREASE_SUGAR, INCREASE_CREAM, DECREASE_SUGAR} from './types';

export const itemQuantity = (action, item) => {

    return (dispatch) => {


        dispatch({
           type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
           payload: item
        })

    }
} 

export const deleteItem = (action, item) => {

    return (dispatch) => {



        dispatch({
           type: DELETE_ITEM,
           payload: item
        })

    }
}

export const sugarQuantity = (action, item) => {

    return (dispatch) => {


        dispatch({
           type: action === "increase" ? INCREASE_SUGAR : DECREASE_SUGAR,
           payload: item
        })

    }
} 

