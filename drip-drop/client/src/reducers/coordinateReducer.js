import {GET_COORDINATES} from '../actions/types';

let initialState = {
    coordinates: {
        lat: null,
        lng: null,
    }
}

export default (state = initialState, action) => {
    let newCoordinates = {}
    switch(action.type) {
        case GET_COORDINATES:
            newCoordinates = action.payload
            return {
            lat:action.payload[0],
            lng:action.payload[1]
            }
        default:
            return state;

    }
}

