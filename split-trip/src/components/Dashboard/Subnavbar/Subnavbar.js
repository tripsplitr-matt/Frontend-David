import React from 'react'
import { Link } from 'react-router-dom'

const Subnavbar = () => {
    return(
        <div className='subnavbar'>
            <Link to='/dashboard/new-trip'>Add a New Trip</Link>
            <div className='show'>
                Show:
                <Link to='/dashboard/all'>All</Link>
                <Link to='/dashboard/current'>Current</Link>
                <Link to='/dashboard/past'>Past</Link>
            </div>
        </div>  
    )
}

export default Subnavbar