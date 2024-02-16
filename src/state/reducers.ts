import { combineReducers } from "@reduxjs/toolkit";

import homeReducer from "../Home/Home.redux";

const rootReducer = combineReducers({
	homeReducer
});

export default rootReducer;
