import {combineReducers, applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {dataReducer} from "./reducer";
import {authReducer} from "../auth/reducer";

const root = combineReducers({
  data: dataReducer,
  auth: authReducer,
});

export const store = legacy_createStore(root, applyMiddleware(thunk));
