import React from 'react'
import { connect } from 'react-redux'
import TripsCard from '../TripsCardViews/TripsCard'
import Subnavbar from '../Subnavbar/Subnavbar';

class CurrentTrips extends React.Component {
    state = {
        currentTrips: this.props.trips.filter(trip => trip.complete === false)
    }

   render() {
    return (
        <div className='dashboard'>
            <Subnavbar />
            {this.state.currentTrips.length === 0 ? 'No current trips' : 
                ( this.state.currentTrips.map(trip => {
                return <TripsCard data={trip} /> 
            }))}
           
        </div>
    )
   }
}

const mapPropsToState = ({ trips }) => ({
    trips
})

export default connect(mapPropsToState, {})(CurrentTrips)