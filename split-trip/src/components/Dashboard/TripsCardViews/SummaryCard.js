import React from 'react'

const SummaryCard = props => {
    return (
        <div className='summary-card trip-card' onClick={() => props.selectTrip(props.data.id)}>
            <h3>{props.data.name}</h3>
            <ul>
                <li>{props.data.date}</li>
            </ul>
        </div>
    )
}

export default SummaryCard