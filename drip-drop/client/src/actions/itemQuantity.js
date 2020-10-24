import {INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM} from './types';

export const itemQuantity = (action, item) => {

    return (dispatch) => {

        console.log('itemQuantity');
        console.log("action", action);
        console.log("item", item)

        dispatch({
           type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
           payload: item
        })

    }
} 

export const deleteItem = (action, item) => {

    return (dispatch) => {

        console.log('deleteItem');
        console.log('deleting', item);

        dispatch({
           type: DELETE_ITEM,
           payload: item
        })

    }
} 

