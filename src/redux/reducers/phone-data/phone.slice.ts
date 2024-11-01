import {createSlice} from "@reduxjs/toolkit";
import {phoneState} from "./phone.state";
import {makeRequestExtraReducer, RequestList} from "../../utils/reducerCreator";
import {IPhoneState} from "./types";
import {getPhoneData} from "./phone.thunk";

const phoneSlice = createSlice({
    name: 'phone',
    initialState: phoneState,
    reducers: {},
    extraReducers: builder => {
        makeRequestExtraReducer<RequestList<IPhoneState>>(
            builder,
            getPhoneData,
            'phoneData'
        )
    }
})

export default phoneSlice.reducer