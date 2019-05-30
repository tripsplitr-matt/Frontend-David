import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://tripsplitr.herokuapp.com/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token})
        })
        .catch(err => console.log(err))
}

export const register = newUser => dispatch => {
    dispatch({ type: SIGNUP_START })
    axios.post('https://tripsplitr.herokuapp.com/auth/register', newUser)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getData = () => dispatch => {

}