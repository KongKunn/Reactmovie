import React from 'react'
// import "../Nav.css"
import { Link } from 'react-router-dom'
import "./logo.css"

const Logo = () => {
  return (
    <>
    <Link to="/">
        <button>
        <h1 className='logo'>NetFlix</h1>
        </button>
      </Link>
    </>
      
        

  )
}

export default Logo