import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

export default function AuthModal(props) {
    if(props.open) {
        setTimeout(() => {
            props.history.push(props.path)
        }, 3000)
    }
    return (
        <div>
            <Modal isOpen={props.open} style={{textAlign: 'center'}}>
                <ModalBody>
                    {props.signUp ? 'Sign up was successful, please login' : 'Log in Successful, Welcome'}
                </ModalBody>
            </Modal>
        </div>
    );
}