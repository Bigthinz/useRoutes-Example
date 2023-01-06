import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <div>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="about-us">About Us</Link>
            </p>
            <Outlet/>
        </div>
    </div>
  )
}

export default About