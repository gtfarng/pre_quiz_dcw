import { combineReducers } from 'redux';
import CountsReducer from './reducer_counts';

const rootReducer = combineReducers({
    counts: CountsReducer
});

export default rootReducer;
