import React from 'react'
import { TripsCard } from '../TripsCardViews'

const CurrentTrips = props => {
    const data = props.handleData()
    let trips = []
    if (data === null) {
        trips = null
    } else {
        trips = data.filter(trip => {
            return trip.complete === 0
        })
        if (trips.length === 0) {
            trips = null
        }
    }
    return (
        <div className='currentTrips'>
            {trips === null ? (
                <h2>You currently do not have any current trips</h2>
            ) : (
                    trips.map(trip => {
                        return <TripsCard data={trip} key={trip.id}/>
                    })
                )}
        </div>
    )
}

export default CurrentTrips