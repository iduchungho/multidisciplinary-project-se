import {createSlice} from "@reduxjs/toolkit"

export const IoTSlice = createSlice ({
    name: "IoT",
    initialState: {
        temparature: [],
        humidity: [],
        light: [],
        isFetching: false,
        error: false
    },
    reducers: {
        updateStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateSuccess: (state, action) => {
            state.isFetching = false;
            state.temparature = action.payload.temp;
            state.humidity = action.payload.humid;
            state.light = action.payload.light;
        },
        updateFail: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})
export const {updateStart, updateSuccess, updateFail} = IoTSlice.actions
export default IoTSlice.reducer