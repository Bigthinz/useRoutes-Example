import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from '../pages/About'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import Rentals from '../pages/Rentals'

const Router = () => {


  let element = useRoutes([
    {
      path:'/',
      element: <Home />,
     
    },
    {
      path:'/about/*',
      element: <About />,
      children: [
        {
          path: "about-us",
          element: <AboutUs />,
        },
        
      ],
    },
    {
      path: '/rentals',
      element: <Rentals />,
      
    }
  ])

  return element
}

export default Router