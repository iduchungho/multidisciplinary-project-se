import axios from "axios"
import {updateStart, updateSuccess, updateFail} from "./IoTSlice"
import {
    loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed, logoutFailed, logoutStart, logoutSuccess,
    changeAvatarStart, changeAvatarSuccess, changeAvatarFailed
} from "./authSlice"

export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/login`, user, {
            withCredentials: true
          });
        dispatch(loginSuccess(res.data))
        navigate("/dashboard")
    }
    catch (err) {
        dispatch(loginFailed())
        alert("Login failed")
    }
}
export const register = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/new`, user)
        dispatch(registerSuccess())
        return res
    }
    catch (err) {
        dispatch(registerFailed())
    }
}
export const logout = async (dispatch, navigate) => {
    dispatch(logoutStart())
    try {
        const logout = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/user/logout`, {
            withCredentials: true
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
export const changeavatar = async (new_avatar, dispatch, id) => {
    dispatch(changeAvatarStart())
    try {
        const new_user = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/user/changeAvatar?id=${id}`, new_avatar, {
            withCredentials: true
        })
        dispatch(changeAvatarSuccess(new_user.data.data))
    } catch (err) {
        dispatch(changeAvatarFailed())
    }
}
export const changeinfor = async (new_avatar, dispatch, id) => {
    dispatch(changeAvatarStart())
    try {
        const new_user = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/user/changeAvatar?id=${id}`, new_avatar, {
            withCredentials: true
        })
        dispatch(changeAvatarSuccess(new_user.data.data))
    } catch (err) {
        dispatch(changeAvatarFailed())
    }
}