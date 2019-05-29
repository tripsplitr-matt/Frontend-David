import React from 'react'
import { Route } from 'react-router-dom'
import Subnavbar from './Subnavbar/Subnavbar'
import DashboardHome from './DashboardHome/DashboardHome'
import '../../styles/Dashboard.css'

class Dashboard extends React.Component {
    state = {

    }

    render(){
        return(
            <div className='dashboard'>
                <Subnavbar />
                <Route render={props => <DashboardHome {...props}/>}/>
            </div>
        )
    }
}

export default Dashboard