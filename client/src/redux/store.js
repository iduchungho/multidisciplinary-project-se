import { configureStore } from "@reduxjs/toolkit";
import IoTReducer from "./IoTSlice";

const store = configureStore({
  reducer: {
    IoT: IoTReducer
  }
});

export default store;