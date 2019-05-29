import { LOGGING_IN } from "../actions";

const initialState = {
    loggedIn: false,
    signUp: false,
    loggingIn: false,
    signingUp: false
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true,
            }
        default: 
            return state;
    }
}

export default login