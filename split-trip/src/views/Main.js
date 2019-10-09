import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTrips, getExpenses, getTripById } from '../store/actions'
import { Subnavbar, Dashboard, NewTrip, AllTrips, CompletedTrips, CurrentTrips } from '../components/Dashboard'
import { Spinner } from 'reactstrap'
import TripView from './TripView'


class Main extends Component {

    state = {
        trips: []
    }

    componentDidMount() {
        if(this.props.trips.length === 0 ) {
            this.props.getTrips()
        }
    }

    componentDidUpdate () {
        if(this.props.addingTrip || this.props.deletingTrip || this.props.updatingTrip) {
            this.props.getTrips()
        } else if(this.props.trips.length === 0 ) {
            this.props.getTrips()
        } else {
            console.log('Everything is running properly')
        }
    }

    handleData = async() => {
        if(this.props.trips.length === 0) {
            return null            
        } else {
            let filterdata = this.props.trips.filter(trip => {
                return parseInt(trip.user_id) === parseInt(localStorage.user_id)
            })
            if (filterdata.length > 0) {
                return filterdata
            } else {
                return null
            }
        }
    }

    selectTrip = id => {
        this.props.getTripById(id)   
        this.props.history.push(`/dashboard/trip/${id}`)
    }

    render() {
        console.log(this.props.trips)
        if (this.props.fetchingTrips || this.props.fetchingExpenses) {
            return (
                <div className='mainSpinner'>
                    <Spinner color='primary' className='spinner' />
                </div>
            )
        } else {
            return (
                console.log(this.props.trips),
                <div className='main'>
                    <Subnavbar />
                    <Route exact path='/dashboard' render={props => <Dashboard {...props} handleData={this.handleData} selectTrip={this.selectTrip} trip={this.props.currenttrip}/>} trips={this.props.trips}/>
                    <Route path='/dashboard/new-trip' render={props => <NewTrip {...props} />} />
                    <Route path='/dashboard/all' render={props => <AllTrips {...props} handleData={this.handleData} selectTrip={this.selectTrip} trip={this.props.currenttrip}/>} />
                    <Route path='/dashboard/current' render={props => <CurrentTrips {...props} handleData={this.handleData} selectTrip={this.selectTrip} trip={this.props.currenttrip}/>} />
                    <Route path='/dashboard/completed' render={props => <CompletedTrips {...props} handleData={this.handleData} selectTrip={this.selectTrip} trip={this.props.currenttrip}/>} />
                    <Route path='/dashboard/trip/:id' render={props => <TripView {...props} trip={this.props.currenttrip} />}/>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ trips, expenses, fetchingTrips, fetchingExpenses, currenttrip, updatingTrip, deletingTrip, addingTrip }) => ({
    trips,
    expenses,
    fetchingTrips,
    fetchingExpenses,
    currenttrip,
    updatingTrip,
    deletingTrip,
    addingTrip
})

export default connect(mapStateToProps, { getExpenses, getTrips, getTripById })(Main)