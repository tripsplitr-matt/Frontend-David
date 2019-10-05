import React from 'react'
import { NavLink } from 'react-router-dom'

const Subnavbar = () => {
    return(
        <div className='subnavbar'>
            <NavLink to='/dashboard/new-trip'>Add a New Trip</NavLink>
            <div className='show'>
                Show:
                <NavLink to='/dashboard/all'>All</NavLink>
                <NavLink to='/dashboard/current'>Current</NavLink>
                <NavLink to='/dashboard/completed'>Completed</NavLink>
            </div>
        </div>  
    )
}

export default Subnavbar