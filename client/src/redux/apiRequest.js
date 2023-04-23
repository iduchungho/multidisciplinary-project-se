import axios from "axios"
import {updateStart, updateSuccess, updateFail} from "./IoTSlice"
import {
    loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed, logoutFailed, logoutStart, logoutSuccess,
} from "./authSlice"

export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/login`, user)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
        navigate("/dashboard")
    }
    catch (err) {
        dispatch(loginFailed())
    }
}
export const register = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/new`, user)
        dispatch(registerSuccess())
        navigate("/")
    }
    catch (err) {
        dispatch(registerFailed())
    }
}
export const logout = async (token, dispatch, navigate) => {
    dispatch(logoutStart())
    try {
        console.log(token)
        const logout = await axios.post('', {
            headers: { token: `Bearer ${token}` },
        })
        dispatch(logoutSuccess())
        navigate('/')
    } catch (err) {
        dispatch(logoutFailed())
    }
}
export const update = async (dispatch) => {
    dispatch(updateStart())
    try {
        let humid = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/humidity/data", {responseType: 'json'})
        let temp = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/temperature/data", {responseType: 'json'})
        let light = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/light/data", {responseType: 'json'})
        const res = {
            humid: humid.data,
            temp: temp.data,
            light: light.data
        }
        dispatch(updateSuccess(res))
    }
    catch (err) {
        dispatch(updateFail())
    }
}