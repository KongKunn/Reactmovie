import React from 'react'
import Logo from './logo/logo'
import Menu from './Menu/Menu'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='navbar'>
        <Logo/>
        <Menu/>
    </div>
  )
}

export default Nav