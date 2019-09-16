import jwtdecode from 'jwt-decode'

export default function checkToken(token) {
    if (token !== undefined) {
        let expire = jwtdecode(token).exp
        let now = Date.now().toString().slice(0, -3)
        if (parseInt(now) > expire) {
            localStorage.removeItem('token')
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}