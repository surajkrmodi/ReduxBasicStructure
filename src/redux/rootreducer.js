import { combineReducers } from "redux";
import buttonReducer from './buttonTester/reducers'

export default combineReducers({
  Butt: buttonReducer,
});