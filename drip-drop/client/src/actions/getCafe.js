import {GET_CAFE} from './types'

export function getCafe(cafe, action) {

    return (dispatch) => {


        dispatch({
           type: GET_CAFE,
           payload: cafe
        })

    }
} 