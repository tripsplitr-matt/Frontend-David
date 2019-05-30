import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions'
import Loader from 'react-loader-spinner'
import '../../styles/SignUp.css'

class SignUp extends React.Component {
   state = {
        newUser: {
            name: '',
            username: '',
            password: '',
            email: ''
        }
   }

   handleChanges = e => {
       this.setState({
           newUser: {
            ...this.state.newUser,
            [e.target.name]: e.target.value
           }
       })
   }

   register = e => {
       e.preventDefault();
       this.props.register(this.state.newUser)
   }

   render() {
       return(
           console.log(this.state.newUser),
           <div className='sign-up'>
                <form className='sign-up-form' onSubmit={this.register}>
                    <label>Sign Up</label>
                    <input name='name' value={this.state.newUser.name} placeholder='Name' type='text' onChange={this.handleChanges} required/>
                    <input name='username' value={this.state.newUser.username} placeholder='Username' type='text' onChange={this.handleChanges} required/>
                    <input name='password' value={this.state.newUser.password} placeholder='Password' type='password' onChange={this.handleChanges} required/>
                    <input name='email' value={this.state.newUser.email} placeholder='Email' type='email' onChange={this.handleChanges} required/>
                    <button>
                        {this.props.signingUp ? (<Loader type='ThreeDots' color='#12a38' height='12' width='26' />) : ('Sign Up')}
                    </button>
                    <Link to='/login'>Already have an account. Log In</Link>
                </form>
           </div>
       )
   }
}

const mapStateToProps = ({error, signingUp }) => ({
    error,
    signingUp
})

export default connect(mapStateToProps, {register})(SignUp)