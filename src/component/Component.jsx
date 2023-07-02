import React from 'react'
import Nav from './Nav/Nav'
import Header from './Main/Header/Header'
import "./Component.css"
import Body from './Main/Body/Body'
import Main from './Main/Main'
const Component = () => {
  return (
    <div className='Component'>
        <Nav/>
        <Main/>
    </div>
  )
}

export default Component