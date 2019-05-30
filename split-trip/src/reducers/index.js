import { LOGIN_START, SIGNUP_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
    loggingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
               ...state,
               loggingIn: false,
               token: action.payload 
            }
        case SIGNUP_START: 
            return {
                ...state,
                signingUp: true
            }
        default: 
            return state;
    }
}

export default reducer;