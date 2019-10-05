import React from 'react' 
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import { login } from '../store/actions'
import AuthModal from '../components/Modal/AuthModal'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isOpen: false
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = async(e) => {
        e.preventDefault();
        await this.props.login(this.state.credentials)
        if(this.props.loggedIn) {
            this.props.handleNav(true)
            this.setState({
                ...this.state,
                isOpen: true
            })
        }
    }

    render() {
        return(
            <div className='login'>
                <form className='login-form' onSubmit={this.login}>
                    <label>Log In</label>
                    <input name='username' onChange={this.handleChanges} value={this.state.credentials.username} placeholder='Username' type='text' required/>
                    <input name='password' onChange={this.handleChanges} value={this.state.credentials.password} placeholder='Password' type='password' required/>
                    {this.props.loggingIn ? (<Spinner color='primary' className='spinner' />) : (<button>Login</button>)}
                    <Link to='/sign-up'>Don't have an account? Sign Up</Link>
                    {this.props.error}
                </form>
                <AuthModal {...this.props} path='/dashboard' open={this.state.isOpen} signUp={false}/>
            </div>
        )
    }
}

const mapStateToProps = ({error, loggingIn, loggedIn}) => ({
    error,
    loggingIn,
    loggedIn
})

export default connect(mapStateToProps, { login })(Login)