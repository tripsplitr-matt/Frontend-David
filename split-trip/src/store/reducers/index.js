import { LOGOUT, LOGIN_START, SIGNUP_START, LOGIN_SUCCESS, FETCH_DATA_START, FETCH_USERS, FETCH_TRIPS, FETCH_EXPENSES, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAIL, FETCH_DATA_FAILURE, FETCH_COMPLETED_TRIPS, ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAIL, UPDATE_TRIP_START, UPDATE_TRIP_SUCCESS, UPDATE_TRIP_FAIL, DELETE_TRIP_START, DELETE_TRIP_SUCCESS, DELETE_TRIP_FAIL, ADD_EXPENSE_START, ADD_EXPENSE_SUCESS, ADD_EXPENSE_FAIL } from "../actions";

const initialState = {
    users: [],
    trips: [],
    completedTrips: [],
    expenses: [],
    loggingIn: false,
    loggedIn: false,
    signingUp: false,
    signedUp: false,
    updatingTrip: false,
    deletingTrip: false,
    addingTrip: false,
    addExpense: false,
    fetchingData: false,
    token: '',
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
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
                loggingIn: false,
                error: action.payload
            }
        case SIGNUP_START:
            return {
                ...state,
                signingUp: true,
                error: ''
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signedUp: true,
                signingUp: false,
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                signingUp: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                token: '',
                error: '',
                fetchingData: false,
                completedTrips: [],
                expenses: [],
                trips: [],
                signedUp: false
            }
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingData: true,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetchingData: false,
                error: action.payload
            }
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                error: ''
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
        case FETCH_COMPLETED_TRIPS:
            return {
                ...state,
                completedTrips: action.payload
            }
        case ADD_TRIP_START:
            return {
                ...state,
                addingTrip: true,
                error: ''
            }
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                addingTrip: false,
                trips: action.payload
            }
        case ADD_TRIP_FAIL:
            return {
                ...state,
                addingTrip: false,
                error: action.payload
            }
        case UPDATE_TRIP_START:
            return {
                ...state,
                updatingTrip: true,
                error: ''
            }
        case UPDATE_TRIP_SUCCESS:
            return {
                ...state,
                updatingTrip: false,
                trips: action.payload
            }
        case UPDATE_TRIP_FAIL:
            return {
                ...state,
                updatingTrip: false,
                error: action.payload
            }
        case DELETE_TRIP_START:
            return {
                ...state,
                deletingTrip: true,
                error: ''
            }
        case DELETE_TRIP_SUCCESS:
            return {
                ...state,
                deletingTrip: false,
                trips: action.payload
            }
        case DELETE_TRIP_FAIL:
            return {
                ...state,
                deletingTrip: false,
                error: action.payload
            }
        case ADD_EXPENSE_START:
            return {
                ...state,
                addExpense: true,
                error: ''
            }
        case ADD_EXPENSE_SUCESS:
            return {
                ...state,
                addExpense: false,
                expenses: action.payload
            }
        case ADD_EXPENSE_FAIL:
            return {
                ...state,
                addExpense: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;