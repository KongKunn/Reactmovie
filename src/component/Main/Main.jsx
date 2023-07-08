import React from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import "./Main.css"
import Content from './Content/Content'
import Pagination from './Pagination/Pagination'

const Main = (props) => {
  console.log("PROPOSPEDPAS",props.children);

  return (
    <div className='Main'>
      <Header/>
       {props.children}
    </div>
  )
}

export default Main