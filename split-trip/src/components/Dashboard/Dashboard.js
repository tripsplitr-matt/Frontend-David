import React from 'react'
import { Route, withRouter } from 'react-router-dom'
// import axios from 'axios'
import Subnavbar from './Subnavbar/Subnavbar'
import DashboardHome from './DashboardHome/DashboardHome'
import '../../styles/Dashboard.css'

class Dashboard extends React.Component {
    state = {
        data: []
    }



    render(){
        return(
            <div className='dashboard'>
                <Subnavbar />
                <Route exact path='/dashboard'render={props => <DashboardHome {...props}/>}/>
            </div>
        )
    }
}

export default withRouter(Dashboard);