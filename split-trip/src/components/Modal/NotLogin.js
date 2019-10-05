import React from 'react'
import { Modal, ModalBody, Button } from 'reactstrap'

export default function NotLogin(props) {
    return (
        <div>
            <Modal isOpen={props.open} className='authModal'>
                <ModalBody>
                    You are currently not log in, please log in to continue.
                </ModalBody>
                <Button style={{width: '50%', margin: '0 auto 10px'}} onClick={() => props.history.push('/')}>Login</Button>
            </Modal>
        </div>
    )
}