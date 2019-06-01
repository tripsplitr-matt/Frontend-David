import React from 'react'

const SummaryCard  = props => {
    console.log(props.data)
    return (
        <div className='summary-card card'>
            <h3>{props.data.name}</h3>
            <ul>
                <li>{props.data.date}</li>
                {/* <li>Cost</li> */}
            </ul>
        </div>
    )
}

export default SummaryCard