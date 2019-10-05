import React from 'react'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

export default function NewTripModal(props) {
    return (
        <div className='newTripModal'>
            <Modal isOpen={props.open} >
                <ModalBody>
                    {props.status ? 'Your trip has been added successfully!' : 'Error trying to add your trip'}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => props.histroy.push('/dashboard/new-trip')} >Continue</Button>
                    <Button onClick={() => props.history.push('/dashboard/all')} >{props.status ? 'Add another trip' : 'Try again'}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}  