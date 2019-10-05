import React from 'react'

const SummaryCard = props => {
    return (
        <div className='trip-card'>
            <h3>{props.data.name}</h3>
            <ul>
                <li>{props.data.date}</li>
            </ul>
        </div>
    )
}

export default SummaryCard