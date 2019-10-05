import jwtdecode from 'jwt-decode'

export default function checkToken(token) {
    if (token !== undefined) {
        let decodedToken = jwtdecode(token)
        let now = Date.now().toString().slice(0, -3)
        if (parseInt(now) > decodedToken.exp) {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('user_id')
            return false
        } else {
            localStorage.setItem('username', decodedToken.username)
            localStorage.setItem('user_id', decodedToken.subject)
            return true
        }
    } else {
        return false
    }
}