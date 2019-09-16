import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/index'

class NavBar extends React.Component { 

    render() {
        return(
            <div className='nav-bar'>
                <div>
                    <NavLink className='nav-brand' to='/'>TripSplitr</NavLink>
                </div>
                <div>
                    <NavLink to={localStorage.token ? '/dashboard' : '/'}>{localStorage.token   ? 'Dashboard' : 'Login'}</NavLink>
                    <NavLink onClick={this.props.logout} to={localStorage.token ? '/' : '/sign-up'}>{localStorage.token ? 'Logout' : 'Sign Up'}</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ loggedIn }) => ({
    loggedIn
})

export default connect(mapStateToProps, { logout })(NavBar)