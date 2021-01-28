import {request} from "../utils/axios";
import {REGISTER_API} from "../Config";
import {LOGIN_API} from "../Config";

const REGISTER_USER = "auth/REGISTER_USER";
const LOGIN_USER = "auth/LOGIN_USER";
const LOGOUT_USER = "auth/LOGOUT_USER";

export function registerUser(userInfo) {
    const data = request("post", REGISTER_API, userInfo);

    return{
        type: REGISTER_USER,
        payload: data,
    };
}

export function loginUser(userInfo) {
    const data = request("post", LOGIN_API, userInfo);
    return{
        type: LOGIN_USER,
        payload: data,
    };
}

export function logoutUser() {
    return{
        type: LOGOUT_USER,
    };
}

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, success: action.payload};
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload};
        case LOGOUT_USER:
            return state;
        default:
            return state;
    }
}