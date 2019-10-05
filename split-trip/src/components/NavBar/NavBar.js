import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/index'

class NavBar extends React.Component {

    logout = () => {
        this.props.handleNav(false)
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <div className={localStorage.token ? 'nav-bar loggedIn' : 'nav-bar'}>
                <div>
                    <NavLink className='nav-brand' to='/'>Trip/Splitr</NavLink>
                </div>
                {localStorage.token ? (
                    <div>
                        <NavLink className='rightSide' to='/dashboard'>Dashboard</NavLink>
                        <NavLink onClick={this.logout} >Logout</NavLink>
                    </div>
                ) : (
                        '' 
                    )}
            </div>
        )
    }
}

const mapStateToProps = ''

export default withRouter(connect(mapStateToProps, { logout })(NavBar))