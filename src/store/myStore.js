import {createStore} from "redux";
import {myReducer} from "../reducers/myReducers";
export var store = createStore(myReducer);