import {combineReducers, applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {dataReducer} from "./reducer";

const root = combineReducers({
  data: dataReducer,
});

export const store = legacy_createStore(root, applyMiddleware(thunk));
