import {GET_CAFE} from '../actions/types';

let initialState = {
        cafe: {
        cafe: null,
        address: null,
    }
}

export default (state = initialState, action) => {
    let selectedCafe = {}
    switch(action.type) {
        case GET_CAFE:
            selectedCafe = action.payload
            console.log('selecting cafe');
            return {
            cafe:action.payload[0],
            address: action.payload[1]
            }
        default:
            return state;

    }
}