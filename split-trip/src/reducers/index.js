import { LOGIN_START, SIGNUP_START, LOGIN_SUCCESS, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_USERS, FETCH_TRIPS, FETCH_EXPENSES, LOGIN_FAILURE } from "../actions";

const initialState = {
    users: [],
    trips: [],
    expenses: [],
    loggingIn: false,
    signingUp: false,
    loggedIn: false,
    token: localStorage.getItem('token'),
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                token: action.payload
            }
        case LOGIN_FAILURE:
            return {
                loggedIn: false,
                loggingIn: false,
                error: action.payload
            }
        case SIGNUP_START:
            return {
                ...state,
                signingUp: true
            }
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case FETCH_TRIPS:
            return {
                ...state,
                trips: action.payload
            }
        case FETCH_EXPENSES:
            return {
                ...state,
                expenses: action.payload
            }
        default:
            return state;
    }
}

export default reducer;