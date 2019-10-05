import React from 'react'
import { connect } from 'react-redux'
import CurrentDisplay from './CurrentDisplay'
import UpdateTrip from './UpdateTrip'

const TripsCard = props => {
    return (
        props.updatingTrip ? ( 
            <UpdateTrip data={props.data} /> 
        ) : ( 
            <CurrentDisplay data={props.data}/>
        )
    )
}

const mapsPropsToState = ({ updatingTrip, error }) => ({
    updatingTrip,
    error
})

export default connect(mapsPropsToState, {})(TripsCard)