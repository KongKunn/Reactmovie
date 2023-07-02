import React from 'react'
import "../Menu.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='menu_button'>
     <Link to = "/">
     <button>
      <i class="fas fa-home"></i>
       Home
      </button>
     </Link>
    </div>
  )
}

export default Home