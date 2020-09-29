import axios from 'axios'
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export const auth = (email, password, isLogin) => {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3hs9x0yRZyVjgMS0YXKBoNMFSoxDejo0';

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3hs9x0yRZyVjgMS0YXKBoNMFSoxDejo0'
        }

        const response = await axios.post(url, authData);
        console.log(response.data)
        const data = response.data;


        //session ends in an hour ↓
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

        localStorage.setItem('token', data.idToken);
        localStorage.setItem('userId', data.localId);
        localStorage.setItem('userId', expirationDate);

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}

export const autoLogout = (time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userId');
    return{
        type: AUTH_LOGOUT
    }
}

export const authSuccess = (token) => {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
