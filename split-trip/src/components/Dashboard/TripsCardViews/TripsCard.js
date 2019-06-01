import React from 'react'
import { connect } from 'react-redux'
import CurrentDisplay from './CurrentDisplay'
import UpdateTrip from './UpdateTrip'

class TripsCard extends React.Component {

    render() {
        return (
            this.props.updatingTrip ? ( <UpdateTrip data={this.props.data} /> ) : ( <CurrentDisplay data={this.props.data}/>)
        )
    }
}

const mapsPropsToState = ({ updatingTrip, error }) => ({
    updatingTrip,
    error
})

export default connect(mapsPropsToState, {})(TripsCard)