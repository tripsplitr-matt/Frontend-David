import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import UserSettings from './UserSettings'

class NavBar extends React.Component { 

    render() {
        return(
            console.log(this.props.loggedIn),
            <div className='nav-bar'>
                <div>
                    <NavLink className='nav-brand' to='/'>TripSplitr</NavLink>
                </div>
                <div>
                    <NavLink to={this.props.loggedIn ? '/dashboard' : '/'}>{this.props.loggedIn ? 'Dashboard' : 'Home'}</NavLink>
                    <NavLink to={this.props.loggedIn ? '/' : '/login'}>{this.props.loggedIn ? 'Logout' : 'Log In'}</NavLink>
                </div>
            </div>
        )
    }
}

const mapPropsToState = ({ loggedIn }) => ({
    loggedIn
})

export default connect(mapPropsToState)(NavBar);