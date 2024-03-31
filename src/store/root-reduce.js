import { combineReducers } from "redux";
import { positionReducer } from "./positions/position-reduers";

export const rootReducer = combineReducers({
    positions: positionReducer,
});
