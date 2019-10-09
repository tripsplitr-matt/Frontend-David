import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { connect } from 'react-redux'
import { getTrips, getExpenses } from '../../store/actions'

class AuthModal extends React.Component {

    async componentDidUpdate() {
        if(this.props.open) {
            await this.props.getExpenses()
            await this.props.getTrips()
            setTimeout(() => {
                this.props.history.push(this.props.path)
            }, 3000)
        }
    }
    // if(props.open) {
    //     setTimeout(() => {
    //         getTrips()
    //         getExpenses()
    //         props.history.push(props.path)
    //     }, 3000)
    // }

    render() {

        return (
            <div>
                <Modal isOpen={this.props.open} className='authModal'>
                    <ModalBody>
                        {this.props.signUp ? 'Sign up was successful, please login' : 'Log in Successful, Welcome'}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStatetoProps = ({}) => ({})

export default connect(mapStatetoProps, {getTrips, getExpenses})(AuthModal)