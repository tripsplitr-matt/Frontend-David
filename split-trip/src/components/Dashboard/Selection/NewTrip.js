import React from 'react'
import { Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import { addTrip } from '../../../store/actions'
import NewTripModal from '../../Modal/NewTripModal'
import { Form, Label, Button, Input } from 'reactstrap'

class NewTrip extends React.Component {

    state = {
        newTrip: {
            name: '',
            date: '',
            base_cost: '',
            complete: false,
            img: '',
            user_id: localStorage.user_id
        }
    }

    handleChanges = e => {
        this.setState({
            newTrip: {
                ...this.state.newTrip,
                [e.target.name]: e.target.value
            }
        })
    }

    addTrip = async(e) => {
        e.preventDefault();
        await this.props.addTrip(this.state.newTrip)
    }

    render() {
        return (
            <div className='trip-form'>
                <Form onSubmit={this.addTrip}>
                    <Label>Add a New Trip</Label>
                    <Input value={this.state.newTrip.name} onChange={this.handleChanges} name='name' type='text' placeholder='Name of Trip' required />
                    <Input value={this.state.newTrip.date} onChange={this.handleChanges} name='date' type='date' placeholder='Date' required />
                    <Input value={this.state.newTrip.img} onChange={this.handleChanges} name='img' type='url' placeholder='Url Image' />
                    {this.props.addingTrip ? (
                        <Spinner color='primary' className='spinner' />
                    ) : (
                            <Button>Submit</Button>
                        )}
                </Form>
                <NewTripModal {...this.props} open={this.props.tripAdded} status={this.props.tripAdded} trip={this.props.currenttrip}/>
            </div>
        )
    }
}

const mapPropsToState = ({ trips, addingTrip, error, tripAdded, currenttrip }) => ({
    trips,
    addingTrip,
    tripAdded,
    currenttrip,
    error
})

export default connect(mapPropsToState, { addTrip })(NewTrip)