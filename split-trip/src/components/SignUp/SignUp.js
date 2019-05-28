import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SignUp.css'

class SignUp extends React.Component {
   state = {
        newUser: {
            name: '',
            username: '',
            password: '',
            email: ''
        }
        // confirmPassword: ''
   }

   handleChanges = e => {
       e.persist();
       this.setState(prevState => ({
           newUser: {
            ...prevState,
            [e.target.name]: e.target.value
           }
        //    confirmPassword: {
        //     ...prevState,
        //     [e.target.name]: e.target.value
        //    }
       }))
   }

   render() {
       return(
           console.log(this.state.newUser),
           <div className='sign-up'>
                <form className='sign-up-form'>
                    <label>Sign Up</label>
                    <input name='name' value={this.state.newUser.name} placeholder='Name' type='text' onChange={this.handleChanges} required/>
                    <input name='username' value={this.state.newUser.username} placeholder='Username' type='text' onChange={this.handleChanges} required/>
                    <input name='password' value={this.state.newUser.password} placeholder='Password' type='password' onChange={this.handleChanges} required/>
                    {/* <input name='confirmPassword' value={this.state.confirmPassword} placeholder='Confirm Password' type='password' onChange={this.handleChanges} required/> */}
                    <input name='email' value={this.state.newUser.email} placeholder='Email' type='email' onChange={this.handleChanges} required/>
                    <button>Sign Up</button>
                    <Link to='/login'>Already have an account. Log In</Link>
                </form>
           </div>
       )
   }
}

export default SignUp