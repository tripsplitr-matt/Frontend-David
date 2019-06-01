import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers, getTrips, getExpenses } from '../../actions'
import Subnavbar from './Subnavbar/Subnavbar'
import SummaryCard from './SummaryCard'
import moment from 'moment'
import '../../styles/Dashboard.css'


const today = moment().format('MMMM Do YYYY')
const currentUser = localStorage.getItem('currentUser')

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getUsers()
        this.props.getTrips()
        this.props.getExpenses()
        console.log(this.props.trips.length)
    }

    displayTrips = () => {
        if(this.props.trips.length == 0) {
            return (<h3>Make new trips</h3>)
        } else {
            return (this.props.trips.map(trip => {
                return <SummaryCard data={trip} key={trip.id}/>
            }))
        }
    }

    render() {
        console.log(this.props.trips)
        return (
            <div className='dashboard'>
                <Subnavbar />
                <div className='container'>
                    <div className='header'>
                        <h2>Welcome, {currentUser}</h2>
                        <h3>{today}</h3>
                    </div>
                    <div className='subContainer'>
                        <div className='summary-content'>
                            {this.displayTrips()}
                        </div>
                        <div className='balances'>
                            <div className='user-balance card'>
                                <h3>User Balances</h3>
                                <ul>
                                    <li>Spent</li>
                                    <li>Received</li>
                                </ul>
                            </div>
                            <div className='trips-balance card'>
                                <h3>Trip Balances</h3>
                                <ul>
                                    <li>Total Spent</li>
                                    <li>Average Spent</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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