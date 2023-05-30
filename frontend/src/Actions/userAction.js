import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST"
        })
        const { data } = await axios.post(`/api/v1/login`,{email,password})
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: error.response.data.message
        })
    }
}

export const logout = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST"
        })
        await axios.get(`/api/v1/logout`)
        dispatch({
            type: "LOGOUT_SUCCESS",
        })
    } catch (error) {
        dispatch({
            type: "LOGOUT_FAIL",
            payload: error.response.data.message
        })
    }
}

export const register = (email,name,password,avatar) => async (dispatch) => {
    try {
        dispatch({
            type: "REGISTER_REQUEST"
        })

        const config = {headers:{"Content-Type":"application/json"}}
        const { data } = await axios.post(`/api/v1/register`,{name,email,password,avatar},config)
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "REGISTER_FAIL",
            payload: error.response.data.message
        })
    }
}

export const loaduser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOADUSER_REQUEST"
        })
        const { data } = await axios.get(`/api/v1/me`)
        dispatch({
            type: "LOADUSER_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "LOADUSER_FAIL",
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type:"CLEAR_ERRORS"
    })
}

export const updateProfile = (email,name,avatar) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_PROFILE_REQUEST"
        })

        const { data } = await axios.put(`/api/v1//me/update`,{name,email,avatar})
        dispatch({
            type: "UPDATE_PROFILE_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "UPDATE_PROFILE_FAIL",
            payload: error.response.data.message
        })
    }
}

export const setIsUpdateFalse = () => async (dispatch) => {
    dispatch({
        type: "UPDATE_PROFILE_RESET"
    })
}

export const updatePassword = (oldPassword,newPassword,confirmPassword) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_PASSWORD_REQUEST"
        })

        const config = {headers:{"Content-Type":"application/json"}}
        const { data } = await axios.put(`/api/v1//password/update`,{oldPassword,newPassword,confirmPassword},config)
        dispatch({
            type: "UPDATE_PASSWORD_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "UPDATE_PASSWORD_FAIL",
            payload: error.response.data.message
        })
    }
}

export const setIsUpdatePasswordFalse = () => async (dispatch) => {
    dispatch({
        type: "UPDATE_PASSWORD_RESET"
    })
}
