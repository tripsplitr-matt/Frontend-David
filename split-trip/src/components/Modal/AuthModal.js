import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { getTrips, getExpenses } from '../../store/actions'

export default function AuthModal(props) {
    if(props.open) {
        setTimeout(() => {
            getTrips()
            getExpenses()
            props.history.push(props.path)
        }, 3000)
    }
    return (
        <div>
            <Modal isOpen={props.open} className='authModal'>
                <ModalBody>
                    {props.signUp ? 'Sign up was successful, please login' : 'Log in Successful, Welcome'}
                </ModalBody>
            </Modal>
        </div>
    )
}