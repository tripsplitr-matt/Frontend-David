import React from 'react'
import { withRouter } from 'react-router'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

function NewTripModal(props) {
    function handleBtns (props, path) {
        let url = path
        if(path === undefined) url = ''
        props.history.push(`/dashboard/${url}`)
    }
    return (
        <div className='newTripModal'>
            <Modal isOpen={props.open} >
                <ModalBody>
                    {props.status ? 'Your trip has been added successfully!' : 'Error trying to add your trip'}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => handleBtns(props)} color='primary' >Continue</Button>
                    <Button onClick={() => window.location.reload()} >{props.status ? 'Add another trip' : 'Try again'}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}  

export default withRouter(NewTripModal)