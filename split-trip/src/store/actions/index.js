import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT = 'LOGOUT'

const link = 'https://tripsplitr.herokuapp.com'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post(`${link}/auth/login`, creds)
        .then(res => {
            localStorage.setItem('currentUser', creds.username)
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token})
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message})
        })
}

export const register = newUser => dispatch => {
    dispatch({ type: SIGNUP_START })
    return axios.post(`${link}/auth/register`, newUser)
        .then(res => {
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: SIGNUP_FAIL, payload: err})
        })
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const FETCH_TRIPS = 'FETCH_TRIPS'
export const FETCH_EXPENSES = 'FETCH_EXPENSES'
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_COMPLETED_TRIPS = 'FETCH_COMPLETED_TRIPS'

export const getUsers = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios.get(`${link}/users`)
        .then(res => {
            dispatch({ type: FETCH_USERS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.error})
        })
}

export const getTrips = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios.get(`${link}/trips`)
        .then(res => {
            dispatch({ type: FETCH_TRIPS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.error})
        })
}

export const getCompletedTrips = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios.get(`${link}/trips/complete`)
        .then(res => {
            dispatch({ type: FETCH_COMPLETED_TRIPS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.message})
        })
}

export const getExpenses = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios.get(`${link}/expenses`)
        .then(res => {
            dispatch({ type: FETCH_EXPENSES, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.error})
        })
}

export const ADD_TRIP_START = 'ADD_TRIP_START'
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS'
export const ADD_TRIP_FAIL = 'ADD_TRIP_FAIL'

export const addTrip = newTrip => dispatch => {
    dispatch({ type: ADD_TRIP_START })
    axios.post(`${link}/trips`, newTrip)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            // dispatch({ type: ADD_TRIP_FAIL, payload: err.response.message})
        })
}

export const DELETE_TRIP_START = 'ADD_TRIP_START'
export const DELETE_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS'
export const DELETE_TRIP_FAIL = 'ADD_TRIP_FAIL'

export const deleteTrip = id => dispatch => {
    dispatch({ type: DELETE_TRIP_START })
    axios.delete(`${link}/trips/${id}`)
        .then(res => {
            dispatch({ type: DELETE_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: DELETE_TRIP_FAIL, payload: err.response.message})
        })
}

export const UPDATE_TRIP_START = 'ADD_TRIP_START'
export const UPDATE_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS'
export const UPDATE_TRIP_FAIL = 'ADD_TRIP_FAIL'

export const updateTrip = trip => dispatch => {
    dispatch({ type: UPDATE_TRIP_START })
    axios.put(`${link}/trips/${trip.id}`, trip)
        .then(res => {
            dispatch({ type: UPDATE_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: UPDATE_TRIP_FAIL, payload: err.response.message})
        })
}

export const ADD_EXPENSE_START = 'ADD_EXPENSE_START'
export const ADD_EXPENSE_SUCESS = 'ADD_EXPENSE_SUCCESS'
export const ADD_EXPENSE_FAIL = 'ADD_EXPENSE_FAIL'

export const addExpense = expense => dispatch => {
    dispatch({ type: ADD_EXPENSE_START })
    axios.post(`${link}/expenses`, expense)
        .then(res => {
            dispatch({ type: ADD_EXPENSE_SUCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_EXPENSE_FAIL, payload: err.response.message})
        })
}