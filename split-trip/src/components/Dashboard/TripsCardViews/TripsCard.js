import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTrip, deleteTrip, getTripById } from '../../../store/actions'
import CurrentDisplay from './CurrentDisplay'
import UpdateTrip from './UpdateTrip'

class TripsCard extends Component {

    state = {
        update: false
    }

    async componentDidMount() {
        if (typeof (this.props.error) === typeof ({})) {
            if(this.props.error.response.status === 404) {
                setTimeout(() => {
                    this.props.history.push('/dashboard')
                }, 2000)
                alert(this.props.error.response.data.message)
            }
        } else {
            if (this.props.data.length === 0) {
                await this.props.getTripById(this.props.match.params.id)
            }
        }
    }

    componentDidUpdate() {
    }

    handleButton = () => {
        this.setState({
            update: !this.state.update
        })
    }

    handleUpdate = async (trip) => {
        await this.props.updateTrip(trip)
        this.props.getTripById(this.props.match.params.id)
        this.setState({
            update: false
        })
    }

    handleDelete = (e, id) => {
        this.props.deleteTrip(id)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            this.state.update ? (
                <UpdateTrip data={this.props.data} delete={this.handleDelete} update={this.handleUpdate} handleBtn={this.handleButton} />
            ) : (
                    <CurrentDisplay data={this.props.data} handleBtn={this.handleButton} />
                )
        )
    }
}

const mapsPropsToState = ({ updatingTrip, deletingTrip, fetchingTrips, error }) => ({
    updatingTrip,
    deletingTrip,
    fetchingTrips,
    error
})

export default connect(mapsPropsToState, { updateTrip, deleteTrip, getTripById })(TripsCard)