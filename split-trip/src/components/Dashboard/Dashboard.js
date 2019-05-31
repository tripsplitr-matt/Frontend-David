import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers, getTrips, getExpenses } from '../../actions'
import Subnavbar from './Subnavbar/Subnavbar'
import DashboardHome from './DashboardHome/DashboardHome'
import '../../styles/Dashboard.css'
import NewTrip from './Addnewtrip/NewTrip';

class Dashboard extends React.Component {
 


    componentDidMount() {
        this.props.getUsers()
        this.props.getTrips()
        this.props.getExpenses()
    }



    render(){
        return(
            <div className='dashboard'>
                <Subnavbar />
                <DashboardHome 
                    users={this.props.users}
                    trips={this.props.trips}
                    expenses={this.props.expenses}
                />
                {/* <Route path='/dashboard/new-trip' render={props => <NewTrip {...props} />} />
                <Route path='/dashboard/all' render={props => <NewTrip {...props} />} /> */}
            </div>
        )
    }
}

const mapPropsToState = ({ users, trips, expenses }) => ({
    users,
    trips,
    expenses
})

export default withRouter(connect(mapPropsToState, { getUsers, getTrips, getExpenses })(Dashboard));