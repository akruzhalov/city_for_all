import {combineReducers} from "redux";
import userAuthReducer from './userAuthReducer'

export default combineReducers({
    userAuthReducer: userAuthReducer
})