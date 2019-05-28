import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component { 
    state = {
        navLink: 'login',
        logging: false
    }

    swapLinks = () => {
        this.setState({
          ...this.state,
          logging: !this.state.logging,
          navLink: this.state.logging ? 'login' : 'sign-up'
        })
    }
    
    goHome = () => {
        this.setState({
            ...this.state,
            navLink: 'login',
            logging: false
        })
    }

    render() {
        return(
            <div className='nav-bar'>
                <div>
                    <NavLink className='nav-brand' onClick={this.goHome} to={`/`}>Split Trip</NavLink>
                </div>
                <div>
                    <NavLink onClick={this.goHome} to='/'>Home</NavLink>
                    <NavLink onClick={this.swapLinks} to={`/${this.state.navLink}`}>{this.state.logging ? 'Sign Up' : 'Log In'}</NavLink>
                </div>
          </div>
        )
    }
}

export default NavBar;