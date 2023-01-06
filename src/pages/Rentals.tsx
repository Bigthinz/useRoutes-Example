import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Rentals = () => {
  return (
    <div>
        <h1>Rentals</h1>
        <p>
            <Link to='/'>Home</Link>
        </p>

        <Outlet/>
    </div>
  )
}

export default Rentals