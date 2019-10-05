import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTrips, getExpenses } from '../store/actions'
import { Subnavbar, Dashboard, NewTrip, AllTrips, CompletedTrips, CurrentTrips } from '../components/Dashboard'
import { Spinner } from 'reactstrap'


class Main extends Component {

    state = {
        trips: []
    }

    async componentWillMount() {
        await this.props.getTrips()
        await this.props.getExpenses()
    }

    handleData = () => {
        if(this.props.trips.length > 0) {
            let filterdata = this.props.trips.filter(trip => {
                return parseInt(trip.user_id) === parseInt(localStorage.user_id)
            })
            if (filterdata.length > 0) {
                return filterdata
            } else {
                return null
            }
        } else {
            return null
        }
    }

    render() {
        if (this.props.fetchingTrips || this.props.fetchingExpenses) {
            return (
                <div className='mainSpinner'>
                    <Spinner color='primary' className='spinner' />
                </div>
            )
        } else {
            return (
                <div className='main'>
                    <Subnavbar />
                    <Route exact path='/dashboard' render={props => <Dashboard {...props} handleData={this.handleData} />} />
                    <Route path='/dashboard/new-trip' render={props => <NewTrip {...props} />} />
                    <Route path='/dashboard/all' render={props => <AllTrips {...props} handleData={this.handleData} />} />
                    <Route path='/dashboard/current' render={props => <CurrentTrips {...props} handleData={this.handleData} />} />
                    <Route path='/dashboard/completed' render={props => <CompletedTrips {...props} handleData={this.handleData} />} />
                </div>
            )
        }
    }
}

const mapStateToProps = ({ trips, expenses, fetchingTrips, fetchingExpenses }) => ({
    trips,
    expenses,
    fetchingTrips,
    fetchingExpenses
})

export default connect(mapStateToProps, { getExpenses, getTrips })(Main)