import {GET_COORDINATES} from './types'

export function getCoordinates(coord, action) {

    return (dispatch) => {
        console.log(action, coord)

        dispatch({
           type: GET_COORDINATES,
           payload: coord
        })

    }
} 