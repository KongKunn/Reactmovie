import React from 'react'
import "../Menu.css"
import {  NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='menu_button'>
     <NavLink to = "/">
     <button>
      <i class="fas fa-home"></i>
       Home
      </button>
     </NavLink>
    </div>
  )
}

export default Home