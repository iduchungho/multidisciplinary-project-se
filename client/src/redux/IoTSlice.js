import {createSlice} from "@reduxjs/toolkit"

export const IoTSlice = createSlice ({
    name: "IoT",
    initialState: {
        temparature: "0",
        humidity: "0",
        light: "20"
    },
    reducers: {
        update: (state, action) => {
            state.temparature = action.payload.temparature;
            state.humidity = action.payload.humidity;
            state.light = action.payload.light;
        }
    }
})
export const {update} = IoTSlice.actions
export default IoTSlice.reducer