import React from 'react' 
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import { login } from '../../actions'
import '../../styles/Login.css'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)  
            .then(() => this.props.history.push('/dashboard'))     
    }

    render() {
        return(
            <div className='login'>
                <form className='login-form' onSubmit={this.login}>
                    <label>Log In</label>
                    <input name='username' onChange={this.handleChanges} value={this.state.credentials.username} placeholder='Username' type='text' required/>
                    <input name='password' onChange={this.handleChanges} value={this.state.credentials.password} placeholder='Password' type='password' required/>
                    <button>
                    {this.props.loggingIn ? (<Loader type='ThreeDots' color='#1f2a38' height='12' width='26' />) : ('Login')}
                    </button>
                    <Link to='/sign-up'>Don't have an account? Sign Up</Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({error, loggingIn}) => ({
    error,
    loggingIn
});

export default connect(mapStateToProps, { login })(Login);