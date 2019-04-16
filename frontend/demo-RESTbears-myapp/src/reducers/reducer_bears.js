import {FETCH_BEARS, ADD_BEAR, GET_BEAR, DELETE_BEAR, UPDATE_BEAR} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_BEARS:
            // console.log(action.payload.data)
            return action.payload.data;
        // return _.mapKeys(action.payload.data,'id');
        case ADD_BEAR:
            return null;
        case GET_BEAR:
            // return null;
            console.log(action.payload.data);
            return {
                ...state,
                // [action.payload.data.id]:action.payload.data
            };
        case DELETE_BEAR:
            return null;
        case UPDATE_BEAR:
            return null;
        default:
            return state;
    }
}
