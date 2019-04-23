import {FETCH_COUNTS } from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_COUNTS:
            return action.payload.data;
        default:
            return state;
    }
}

