import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'me-react-app/auth/SET_AUTH_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});

//thunks

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let errorMsg = response.data.messages.length > 0 ? response.data.messages[0] : "Some another warning" +
            " message";
        dispatch(stopSubmit("login", {_error: errorMsg}));
    }
};

export const logout = () => async (dispatch) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
