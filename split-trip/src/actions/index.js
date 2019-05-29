export const LOGGING_IN = 'LOGGING_IN';
export const SIGNING_UP = 'SIGNING_UP';

export const toggleLogIn = state => {
    return {
        type: LOGGING_IN,
        payload: !state
    }
}


