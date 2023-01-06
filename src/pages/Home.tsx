import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <div>
            <p>
                <Link to="/about">About</Link>
            </p>
            <p>
                <Link to="/rentals">Rentals</Link>
            </p>
        

        </div>
    </div>
  )
}

export default Home