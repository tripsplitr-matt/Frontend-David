import React from 'react'
import { NavLink } from 'react-router-dom'
import UserSettings from './UserSettings'

class NavBar extends React.Component { 
    state = {
        home: false,
        loggedIn: false
    }

    componentDidMount () {
        if(window.location.pathname === '/dashboard'){
            this.setState({
                home: true,
                loggedIn: true
            })
        } else {
            this.setState({
                home: false,
                loggedIn: false
            })
        }
    }

    render() {
        return(
            <div className='nav-bar'>
                <div>
                    <NavLink className='nav-brand' to={this.state.home ? '/dashboard' : '/'}>TripSplitr</NavLink>
                </div>
                <div>
                    <NavLink to={this.state.home ? '/dashboard' : '/'}>{this.state.home ? 'Dashboard' : 'Home'}</NavLink>
                    {this.state.loggedIn ? <UserSettings {...this.props}/> : <NavLink to='/login'>Log In</NavLink>}
                </div>
            </div>
        )
    }
}

export default NavBar;