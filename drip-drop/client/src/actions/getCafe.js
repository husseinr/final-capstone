import {GET_CAFE} from './types'

export function getCafe(cafe, action) {

    return (dispatch) => {
        console.log(action, cafe)

        dispatch({
           type: GET_CAFE,
           payload: cafe
        })

    }
} 