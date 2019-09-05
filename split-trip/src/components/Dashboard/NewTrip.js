import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Subnavbar from './Subnavbar'
import { addTrip } from '../../store/actions'


class NewTrip extends React.Component {

    state={
        newTrip: {
            name: '',
            date: '',
            base_cost: '',
            complete: false,
            img: ''
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

    addTrip = e => {
        e.preventDefault()
        this.props.addTrip(this.state.newTrip)
        this.props.history.push('/dashboard')
    }

    render() {
        return(
            <div className='dashboard'>
                <Subnavbar />
                <form onSubmit={this.addTrip}>
                    <input value={this.state.newTrip.name} onChange={this.handleChanges} name='name' type='text' placeholder='Name of Trip' required/>
                    <input value={this.state.newTrip.date} onChange={this.handleChanges} name='date' type='date' placeholder='Date' required/>
                    <input value={this.state.newTrip.base_cost} onChange={this.handleChanges} name='base_cost' type='number' placeholder='Cost' required/>
                    <input value={this.state.newTrip.img} onChange={this.handleChanges} name='img' type='url' placeholder='Url Image' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapPropsToState = ({ trips }) => ({
    trips
})

export default withRouter(connect(mapPropsToState, { addTrip })(NewTrip));