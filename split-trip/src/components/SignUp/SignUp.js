import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../store/actions'
import { Spinner } from 'reactstrap'
import AuthModal from '../Modal/AuthModal'

class SignUp extends React.Component {
    state = {
        newUser: {
            name: '',
            username: '',
            password: '',
            email: ''
        },
        isOpen: false
    }

    handleChanges = e => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        })
    }

    register = async(e) => {
        e.preventDefault();
        await this.props.register(this.state.newUser)
        if(this.props.signedUp) {
            this.setState({
                ...this.state,
                isOpen: true
            })
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <form className='sign-up-form' onSubmit={this.register}>
                    <label>Sign Up</label>
                    <input name='name' value={this.state.newUser.name} placeholder='Name' type='text' onChange={this.handleChanges} required />
                    <input name='username' value={this.state.newUser.username} placeholder='Username' type='text' onChange={this.handleChanges} required />
                    <input name='password' value={this.state.newUser.password} placeholder='Password' type='password' onChange={this.handleChanges} required />
                    <input name='email' value={this.state.newUser.email} placeholder='Email' type='email' onChange={this.handleChanges} required />
                    {this.props.signingUp ? (<Spinner color='primary' className='spinner' />) : (<button>Sign Up</button>)}
                    <Link to='/'>Already have an account. Log In</Link>
                </form>
                <AuthModal {...this.props} path='/' open={this.state.isOpen} signUp={true}/>
            </div>
        )
    }
}

const mapStateToProps = ({ error, signingUp, signedUp }) => ({
    error,
    signingUp,
    signedUp
})

export default connect(mapStateToProps, { register })(SignUp)