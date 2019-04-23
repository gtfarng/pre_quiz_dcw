import { combineReducers } from 'redux';
import BearsReducer from './reducer_bears';
import BearEditReducer from './reducer_edit'



const rootReducer = combineReducers({
    bears: BearsReducer,
    editBear: BearEditReducer
});




export default rootReducer;
