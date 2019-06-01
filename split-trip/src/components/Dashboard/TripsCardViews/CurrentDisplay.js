import React from 'react'
import { connect } from 'react-redux'

class CurrentDisplay extends React.Component {
   
    render() {
        console.log(this.props)
        return (
            <div className='trips-card card'>
                <h3></h3>    
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button></button>
            </div>
        )
    }
}

const mapPropsToState = ({ updatingTrip, deletingTrip, addingTrip, addExpense }) => ({
    updatingTrip,
    deletingTrip,
    addingTrip,
    addExpense
})

export default connect(mapPropsToState, {} )(CurrentDisplay)