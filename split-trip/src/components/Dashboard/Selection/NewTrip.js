import React from 'react'
import { Spinner } from 'reactstrap' 
import { connect } from 'react-redux'
import { addTrip } from '../../../store/actions'
import NewTripModal from '../../Modal/NewTripModal'

class NewTrip extends React.Component {

    state = {
        newTrip: {
            name: '',
            date: '',
            base_cost: '',
            complete: false,
            img: '',
            user_id: localStorage.user_id
        },
        isOpen: false,
        status: false
    }

    handleChanges = e => {
        this.setState({
            newTrip: {
                ...this.state.newTrip,
                [e.target.name]: e.target.value
            }
        })
    }

    addTrip = async e => {
        e.preventDefault()
        await this.props.addTrip(this.state.newTrip)
        if(this.props.tripAdded) {
            console.log(this.state.isOpen)
            this.setState({
                isOpen: true,
                status: true
            })
            console.log(this.state.isOpen)
        } else {
            this.setState({
                isOpen: true,
                status: false
            })
        }
    }

    render() {
        return (
            <div className='addTrip'>
                <form onSubmit={this.addTrip}>
                    <label>Add a New Trip</label>
                    <input value={this.state.newTrip.name} onChange={this.handleChanges} name='name' type='text' placeholder='Name of Trip' required />
                    <input value={this.state.newTrip.date} onChange={this.handleChanges} name='date' type='date' placeholder='Date' required />
                    <input value={this.state.newTrip.base_cost} onChange={this.handleChanges} name='base_cost' type='number' placeholder='Cost' required />
                    <input value={this.state.newTrip.img} onChange={this.handleChanges} name='img' type='url' placeholder='Url Image' />
                    {this.props.addingTrip ? (
                        <Spinner color='primary' className='spinner' />
                    ) : ( 
                        <button>Submit</button>
                    )}
                </form>
                <NewTripModal {...this.props} open={this.state.isOpen} status={this.state.status} />
            </div>
        )
    }
}

const mapPropsToState = ({ trips, addingTrip, error, tripAdded }) => ({
    trips,
    addingTrip,
    tripAdded,
    error
})

export default connect(mapPropsToState, { addTrip })(NewTrip)