import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import checkToken from './CheckToken'
import NotLogin from '../Modal/NotLogin'

const PrivateRoute = ({ component: Component, token, errorStatusCode, ...rest }) => {
    return (
        <Route 
            {...rest}  
            render={props =>
                checkToken(localStorage.token) ? (
                    <Component {...props} /> 
                    ) : ( 
                    <NotLogin {...props} open={true}/>                    
                )}
        />
    )
}

const mapStateToProps = ({ token, errorStatusCode }) => ({
    token,
    errorStatusCode
})

export default connect(mapStateToProps, {})(PrivateRoute)