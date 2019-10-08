import React, {Component} from 'react'
import { TripsCard } from '../components/Dashboard'

class TripView extends Component {

    render () {
        // console.log(this.props.currenttrip)
        return (
            <TripsCard data={this.props.trip} />
        )
    }
}

export default TripView