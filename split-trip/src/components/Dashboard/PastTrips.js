import React from 'react'
import { connect } from 'react-redux'
import TripsCard from './TripsCardViews/TripsCard'
import Subnavbar from './Subnavbar';

class PastTrips extends React.Component {
    state = {
        pastTrips: this.props.trips.filter(trip => trip.complete === true)
    }

    render() {
        return (
            <div className='dashboard'>
                <Subnavbar />
                {this.state.pastTrips.length === 0 ? 'No past trips' :
                    (this.state.pastTrips.map(trip => {
                        return <TripsCard data={trip} />
                    }))}

            </div>
        )
    }
}

const mapPropsToState = ({ trips }) => ({
    trips
})

export default connect(mapPropsToState, {})(PastTrips)