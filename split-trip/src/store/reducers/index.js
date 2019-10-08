import { 
    LOGOUT, 
    SIGNUP_START, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAIL, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    FETCH_USERS_START, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    FETCH_TRIPS_START, 
    FETCH_TRIPS_SUCCESS, 
    FETCH_TRIPS_FAILURE, 
    FETCH_TRIP_START,
    FETCH_TRIP_SUCCESS,
    FETCH_TRIP_FAILURE,
    FETCH_EXPENSES_START, 
    FETCH_EXPENSES_SUCCESS, 
    FETCH_EXPENSES_FAILURE,  
    FETCH_COMPLETED_TRIPS_START, 
    FETCH_COMPLETED_TRIPS_SUCCESS, 
    FETCH_COMPLETED_TRIPS_FAILURE, 
    ADD_TRIP_START, 
    ADD_TRIP_SUCCESS, 
    ADD_TRIP_FAIL,
    UPDATE_TRIP_START, 
    UPDATE_TRIP_SUCCESS, 
    UPDATE_TRIP_FAIL, 
    DELETE_TRIP_START, 
    DELETE_TRIP_SUCCESS, 
    DELETE_TRIP_FAIL, 
    ADD_EXPENSE_START, 
    ADD_EXPENSE_SUCESS,
    ADD_EXPENSE_FAIL } from "../actions";

const initialState = {
    users: [],
    trips: [],
    currenttrip: [],
    completedTrips: [],
    expenses: [],
    loggingIn: false,
    loggedIn: false,
    signingUp: false,
    signedUp: false,
    updatingTrip: false,
    deletingTrip: false,
    addingTrip: false,
    tripAdded: false,
    addExpense: false,
    fetchingTrips: false,
    fetchingExpenses: false,
    fetchingUsers: false,
    fetchingCompletedTrips: false,
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
        case FETCH_USERS_START:
            return {
                ...state,
                fetchingUsers: true,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                fetchingUsers: false,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                fetchingUsers: false,
                error: action.payload
            }
        case FETCH_TRIPS_START:
            return {
                ...state,
                fetchingTrips: true,
                tripAdded: false,
                error: ''
            }
        case FETCH_TRIPS_SUCCESS:
            return {
                ...state,
                fetchingTrips: false,
                trips: action.payload
            }
        case FETCH_TRIPS_FAILURE:
            return {
                ...state,
                fetchingTrips:false,
                error: action.payload
            }
        case FETCH_TRIP_START: 
            return {
                ...state,
                fetchingTrips: true,
                currenttrip: [],
                error: '',
            }
        case FETCH_TRIP_SUCCESS: 
            return {
                ...state,
                fetchingTrips: false,
                currenttrip: action.payload
            }
        case FETCH_TRIP_FAILURE: 
            return {
                ...state,
                fetchingTrips: false,
                error: action.payload
            }
        case FETCH_EXPENSES_START:
            return {
                ...state,
                fetchingExpenses: true,
                error: ''
            }
        case FETCH_EXPENSES_SUCCESS:
            return {
                ...state,
                fetchingExpenses: false,
                expenses: action.payload
            }
        case FETCH_EXPENSES_FAILURE:
            return {
                ...state,
                fetchingExpenses: false,
                error: action.payload
            }
        case FETCH_COMPLETED_TRIPS_START:
            return {
                ...state,
                fetchingCompletedTrips: true,
                error: ''
            }
        case FETCH_COMPLETED_TRIPS_SUCCESS:
            return {
                ...state,
                fetchingCompletedTrips: false,
                completedTrips: action.payload
            }
        case FETCH_COMPLETED_TRIPS_FAILURE:
            return {
                ...state,
                fetchingCompletedTrips: false,
                error: action.payload
            }
        case ADD_TRIP_START:
            return {
                ...state,
                addingTrip: true,
                tripAdded: false,
                currenttrip: [],
                error: ''
            }
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                addingTrip: false,
                tripAdded: true,
                currenttrip: action.payload
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