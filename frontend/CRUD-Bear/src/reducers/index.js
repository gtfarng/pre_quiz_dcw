import numberReducer from './numberReducer'
import bearReducer from './bearReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    number: numberReducer,
    bears: bearReducer
})
export default rootReducer