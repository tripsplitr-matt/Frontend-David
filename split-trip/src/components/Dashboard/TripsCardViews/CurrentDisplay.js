import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const CurrentDisplay = props => {
    return (
        <div className='trip-card card'>
            <h3>{props.data.name}</h3>    
            <img src={props.data.img} />
            <ul>
                <li>{props.data.date}</li>
                <li>${props.data.base_cost}</li>
                <li>Completed: {props.completed === 0 ? (<FontAwesomeIcon icon={faCheck}/>) : (<FontAwesomeIcon icon={faTimes} />) } </li>
            </ul>
            {props.img  === '' ? (<img src={props.img} alt='trip' />) : ('')}
            <button>Update Trip</button>
        </div>
    )
}

export default CurrentDisplay