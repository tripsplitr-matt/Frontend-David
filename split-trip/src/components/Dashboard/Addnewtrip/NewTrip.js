import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Subnavbar from '../Subnavbar/Subnavbar'
// import { addTrip } from '../../../actions'


class NewTrip extends React.Component {

    state={
        newTrip: {
            name: '',
            date: '',
            base_cost: '',
            completed: false,
            img: ''
        }
    }

    render() {
        return(
            <div className='dashboard'>
                <Subnavbar />
                <form>
                    <input value={this.state.newTrip.name} name='name' type='text' placeholder='Name of Trip' required/>
                    <input value={this.state.newTrip.date} name='date' type='date' placeholder='Date' required/>
                    <input value={this.state.newTrip.base_cost} name='base_cost' type='number' placeholder required/>
                    <input value={this.state.newTrip.img} name='img' type='url' placeholder required/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapPropsToState = ({ trips }) => ({
    trips
})

export default withRouter(connect(mapPropsToState, { })(NewTrip));