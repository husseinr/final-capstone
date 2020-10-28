import {GET_COORDINATES} from './types'

export function getCoordinates(coord, action) {

    return (dispatch) => {
   

        dispatch({
           type: GET_COORDINATES,
           payload: coord
        })

    }
} 