import React from 'react'
import { Form, Label, Button, Input, FormGroup } from 'reactstrap'

class UpdateTrip extends React.Component {

    state = {
        updateTrip: {
            id: this.props.data.id,
            name: this.props.data.name,
            date: this.props.data.date,
            img: this.props.data.img
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
        this.props.update(this.state.updateTrip)
        // console.log(this.state.updateTrip)        
    }

    render() {
        return (
            <div className='trip-form'>
                <Form onSubmit={this.updateTrip} className='update-form'>
                    <Label>Update Trip</Label>
                    <Input value={this.state.updateTrip.name} onChange={this.handleChanges} name='name' type='text' placeholder='Name of Trip' required />
                    <Input value={this.state.updateTrip.date} onChange={this.handleChanges} name='date' type='date' placeholder='Date' required />
                    <Input value={this.state.updateTrip.img} onChange={this.handleChanges} name='img' type='url' placeholder='Url Image' />
                    <FormGroup>
                        <Button onClick={() => this.props.handleBtn()}>Go Back</Button>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default UpdateTrip