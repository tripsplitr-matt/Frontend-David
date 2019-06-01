import React from 'react'

class UpdateTrip extends React.Component{

    state = {
        updateTrip: {
            name: '',
            date: '',
            base_cost: '',
            complete: false,
            img: ''
        }
    }

    handleChanges = e => {
        this.setState({
            updateTrip: {
                ...this.state.updateTrip,
                [e.target.name]: e.target.value
            }
        })
    }

    updateTrip = e => {
        e.preventDefault();
        this.props.updateTrip(this.state.updateTrip)
        
    }

   render () {
        return (
            <form onSubmit={this.updateTrip}>
                <input value={this.state.updateTrip.name} onChange={this.handleChanges} name='name' type='text' placeholder='Name of Trip' required/>
                <input value={this.state.updateTrip.date} onChange={this.handleChanges} name='date' type='date' placeholder='Date' required/>
                <input value={this.state.updateTrip.base_cost} onChange={this.handleChanges} name='base_cost' type='number' placeholder='Cost' required/>
                <input value={this.state.updateTrip.img} onChange={this.handleChanges} name='img' type='url' placeholder='Url Image' />
                <button>Submit</button>
            </form>
        )
   }
}

export default UpdateTrip