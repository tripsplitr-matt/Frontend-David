import React from 'react'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import '../../styles/Login.css'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    render() {
        return(
            <div className='login'>
                <form className='login-form'>
                    <label>Log In</label>
                    <input name='username' value={this.state.credentials.username} placeholder='Username' type='text' required/>
                    <input name='password' value={this.state.credentials.password} placeholder='Password' type='password' required/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login