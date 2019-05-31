import React from 'react'
import moment from 'moment'
import SummaryCard from './SummaryCard'

const today = moment().format('MMMM Do YYYY')
const currentUser = localStorage.getItem('currentUser')


const DashboardHome = props => {
    return (
        <div className='container'>
            <div className='header'>
                <h2>Welcome, {currentUser}</h2>
                <h3>{today}</h3>
            </div>
            <div className='subContainer'>
                <div className='summary-content'>
                    {props.trips.map(trip => {
                        return <SummaryCard data={trip}/>
                    })}
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
    )
}

export default DashboardHome;