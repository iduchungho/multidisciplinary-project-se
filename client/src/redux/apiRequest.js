import axios from "axios"
import {updateStart, updateSuccess, updateFail} from "./IoTSlice"

export const update = async (dispatch) => {
    dispatch(updateStart())
    try {
        let humid = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/humidity/data")
        let temp = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/temperature/data")
        let light = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/light/data")
        humid = JSON.stringify(humid.data)
        temp = JSON.stringify(temp.data)
        light = JSON.stringify(light.data)
        const res = {
            humid: humid,
            temp: temp,
            light: light
        }
        dispatch(updateSuccess(res))
    }
    catch (err) {
        dispatch(updateFail())
    }
}