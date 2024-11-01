import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getPhoneData = createAsyncThunk('phone',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:4000/smartphones", {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return thunkAPI.rejectWithValue(err.message);
            }
        }
    }
);
