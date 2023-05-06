import axios from "axios"
import { updatelightStart, updatelightSuccess, updatelightFailed,
    updatetemperhumidStart, updatetemperhumidSuccess, updatetemperhumidFailed } from "./IoTSlice"
import {
    loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed, logoutFailed, logoutStart, logoutSuccess,
    changeAvatarStart, changeAvatarSuccess, changeAvatarFailed, changeInforStart, changeInforSuccess, changeInforFailed,
    changePassStart, changePassSuccess, changePassFailed
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
export const updatelight = async (dispatch, date) => {
    dispatch(updatelightStart())
    try {
        let light = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/light/data", { responseType: 'json' })
        const res = {
            light: light.data
        }
        dispatch(updatelightSuccess(res))
    }
    catch (err) {
        dispatch(updatelightFailed())
    }
}
export const updatetemperhumid = async (dispatch, date) => {
    dispatch(updatetemperhumidStart())
    try {
        let humid = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/humidity/data", { responseType: 'json' })
        let temp = await axios.get("https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/temperature/data", { responseType: 'json' })
        const res = {
            humid: humid.data,
            temp: temp.data,
        }
        dispatch(updatetemperhumidSuccess(res))
    }
    catch (err) {
        dispatch(updatetemperhumidFailed())
    }
}
export const changeavatar = async (new_avatar, dispatch, id) => {
    dispatch(changeAvatarStart())
    try {
        const new_user = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/user/changeAvatar?id=${id}`, new_avatar, {
            withCredentials: true
        })
        dispatch(changeAvatarSuccess(new_user.data.data))
        alert("Change Avatar success")
    } catch (err) {
        dispatch(changeAvatarFailed())
        alert("Change Avatar failed")
    }
}
export const changeinfor = async (new_infor, dispatch, id) => {
    dispatch(changeInforStart())
    try {
        const new_user = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/user/update/info?id=${id}`, new_infor, {
            withCredentials: true
        })
        console.log(new_user)
        dispatch(changeInforSuccess(new_user.data.message))
        alert("Change User's Information Success")
    } catch (err) {
        dispatch(changeInforFailed())
        alert("Change User's Information Failed")
    }
}
export const changepass = async (changepass, dispatch, id) => {
    dispatch(changePassStart())
    try {
        const new_user = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/user/update/pass?id=${id}`, changepass, {
            withCredentials: true
        })
        console.log(new_user)
        dispatch(changePassSuccess())
        alert("Change Password Success")
    } catch (err) {
        dispatch(changePassFailed())
        alert("Change Password Failed")
    }
}
export const putmessage = async (message, id) => {
    try {
        await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/action/log?id=${id}`, message, {
            withCredentials: true
        })
    } catch (err) {
        console.log(err)
    }
}
export const getmessage = async (id) => {
    try {
        let message = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/action/get?id=${id}`, message, {
            withCredentials: true
        })
        console.log("Message", message)
        return message
    } catch (err) {
        console.log(err)
    }
}