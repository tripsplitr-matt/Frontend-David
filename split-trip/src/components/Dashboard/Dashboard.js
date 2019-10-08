import React from 'react'
import { SummaryCard } from './TripsCardViews'
import moment from 'moment'

const today = moment().format('MMMM Do YYYY')

class Dashboard extends React.Component {

    state = {
        trips: []
    }

    async componentDidMount() {
        this.setState({
            trips: await this.props.handleData()
        })
    }

    render() {
        return (
            <div className='dashboard'>
                <div className='header'>
                    <h2>Welcome, {localStorage.username}</h2>
                    <h3>{today}</h3>
                </div>
                <div className='subContainer'>
                    <div className='summary-content'>
                        {this.state.trips === null ? (
                            <h2>No trips have been created</h2>
                        ) : 
                            this.state.trips.map(trip => {
                                return <SummaryCard data={trip} key={trip.id} />
                            })
                        }
                    </div>
                    <div className='balances'>
                        {/* <div className='user-balance trip-card'>
                            <h3>User Balances</h3>
                            <ul>
                                <li>Spent</li>
                                <li>Received</li>
                            </ul>
                        </div> */}
                        <div className='trips-balance trip-card'>
                            <h3>Trip Balances</h3>
                            <ul>
                                <li>Total Spent</li>
                                <li>Average Spent</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard