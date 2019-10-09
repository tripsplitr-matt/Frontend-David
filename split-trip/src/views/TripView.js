import React, {Component} from 'react'
import { TripsCard } from '../components/Dashboard'

class TripView extends Component {

    render () {
        return (
            <div className='tripView'>
                <TripsCard {...this.props} data={this.props.trip} />
            </div>
        )
    }
}

export default TripView