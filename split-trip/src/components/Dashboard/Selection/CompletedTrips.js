import React from 'react'
import { TripsCard } from '../TripsCardViews'

const CompletedTrips = props => {
    const data = props.handleData()
    let trips = []
    if(data === null) {
        trips = null
    } else {
        trips = data.filter(trip => {
            return trip.complete === 1
        })
        if (trips.length === 0) {
            trips = null
        } 
    }
    return (
        <div className='completedTrips'>
            {trips === null ? (
                <h2>You currently do not have any completed trips</h2>
            ) : (
                    trips.map(trip => {
                        return <TripsCard data={trip} key={trip.id}/>
                    })
                )}
        </div>
    )
}

export default CompletedTrips