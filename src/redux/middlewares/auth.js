import AuthService from "../services/auth";
import {
    loginRequest,
    loginSuccess,
    loginError,
    userDetails
} from "../slices/auth.slice";

export function LoginUser() {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const response = await AuthService.getdata();
            dispatch(loginSuccess(response));
        } catch (error) {
            dispatch(loginError(error.message));
        }
    };
}

export function Userdata(user) {
    return async (dispatch) => {
        dispatch(userDetails(user))
    }
}