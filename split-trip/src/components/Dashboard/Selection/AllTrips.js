import React from 'react'
import { TripsCard } from '../TripsCardViews'

const AllTrips = props => {
    const trips = props.handleData()
    return (
        <div className='allTrips'>
            {trips === null ? (
                <h2>No trips have been created</h2>
            ) : (
                trips.map(trip => {
                    return <TripsCard data={trip} />
                })
            )}
        </div>
    )
}

export default AllTrips