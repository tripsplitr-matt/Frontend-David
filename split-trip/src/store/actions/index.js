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
    localStorage.removeItem('username')
    localStorage.removeItem('user_id')
}

export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

export const getUsers = () => dispatch => {
    dispatch({ type: FETCH_USERS_START})
    axios.get(`${link}/users`)
        .then(res => {
            dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_USERS_FAILURE, payload: err})
        })
}

export const FETCH_TRIPS_START = 'FETCH_TRIPS_START'
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS'
export const FETCH_TRIPS_FAILURE = 'FETCH_TRIPS_FAILURE'

export const getTrips = () => dispatch => {
    dispatch({ type: FETCH_TRIPS_START})
    axios.get(`${link}/trips`)
        .then(res => {
            dispatch({ type: FETCH_TRIPS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_TRIPS_FAILURE, payload: err})
        })
}

export const FETCH_TRIP_START = 'FETCH_TRIP_START'
export const FETCH_TRIP_SUCCESS = 'FETCH_TRIP_SUCCESS'
export const FETCH_TRIP_FAILURE = 'FETCH_TRIP_FAILURE'

export const getTripById = id => dispatch => {
    dispatch({ type: FETCH_TRIP_START })
    axios.get(`${link}/trips/${id}`)
        .then(res => {
            dispatch({ type: FETCH_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_TRIP_FAILURE, payload: err})
        })
}

export const FETCH_COMPLETED_TRIPS_START = 'FETCH_COMPLETED_TRIPS_START'
export const FETCH_COMPLETED_TRIPS_SUCCESS = 'FETCH_COMPLETED_TRIPS_SUCCESS'
export const FETCH_COMPLETED_TRIPS_FAILURE = 'FETCH_COMPLETED_TRIPS_FAILURE'

export const getCompletedTrips = () => dispatch => {
    dispatch({ type: FETCH_COMPLETED_TRIPS_START})
    axios.get(`${link}/trips/complete`)
        .then(res => {
            dispatch({ type: FETCH_COMPLETED_TRIPS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_COMPLETED_TRIPS_FAILURE, payload: err})
        })
}

export const FETCH_EXPENSES_START = 'FETCH_EXPENSES_START'
export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS'
export const FETCH_EXPENSES_FAILURE = 'FETCH_EXPENSES_FAILURE'

export const getExpenses = () => dispatch => {
    dispatch({ type: FETCH_EXPENSES_START})
    axios.get(`${link}/expenses`)
        .then(res => {
            dispatch({ type: FETCH_EXPENSES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_EXPENSES_FAILURE, payload: err})
        })
}

export const ADD_TRIP_START = 'ADD_TRIP_START'
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS'
export const ADD_TRIP_FAIL = 'ADD_TRIP_FAIL'

export const addTrip = newTrip => dispatch => {
    dispatch({ type: ADD_TRIP_START })
    axios.post(`${link}/trips`, newTrip)
        .then(res => {
            dispatch({ type: ADD_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_TRIP_FAIL, payload: err })
        })
}

export const DELETE_TRIP_START = 'DELETE_TRIP_START'
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS'
export const DELETE_TRIP_FAIL = 'DELETE_TRIP_FAIL'

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

export const UPDATE_TRIP_START = 'UPDATE_TRIP_START'
export const UPDATE_TRIP_SUCCESS = 'UPDATE_TRIP_SUCCESS'
export const UPDATE_TRIP_FAIL = 'UPDATE_TRIP_FAIL'

export const updateTrip = trip => dispatch => {
    dispatch({ type: UPDATE_TRIP_START })
    axios.put(`${link}/trips/${trip.id}`, trip)
        .then(res => {
            dispatch({ type: UPDATE_TRIP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: UPDATE_TRIP_FAIL, payload: err})
            console.log(trip.id)
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