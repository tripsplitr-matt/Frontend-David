import React from 'react'
import { connect } from 'react-redux'
import TripsCard from './TripsCardViews/TripsCard';
import Subnavbar from './Subnavbar';


class AllTrips extends React.Component {

    render() {
        return (
            <div className='dashboard'>
                <Subnavbar />
                {this.props.trips.length === 0 ? 'No trips have been made' :
                    (this.props.trips.map(trip => {
                        return <TripsCard data={trip} />
                    }))}
            </div>
        )
    }
}

const mapPropsToState = ({ trips }) => ({
    trips
})

export default connect(mapPropsToState, {})(AllTrips)