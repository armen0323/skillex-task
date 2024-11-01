import {combineReducers} from "@reduxjs/toolkit";
import phoneSlice from "./reducers/phone-data/phone.slice";


export const rootReducer = combineReducers({
    phoneData: phoneSlice
});
