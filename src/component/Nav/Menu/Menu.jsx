import React from 'react'
import Home from './Home/Home'
import Watchlist from './WatchList/Watchlist'
import Toprated from './TopRated/Toprated'
import Comingsoon from './ComingSoon/Comingsoon'
import Router from './Router/Router'
import Setting from './Setting/Setting'
import Login from './Login/Login'
import History from './History/History'
const Menu = () => {
  return (
    <div>
      <h3 style={{  opacity:'0.6', paddingLeft:'8%'}}>
        Menu
      </h3>
          <Home/>
          <Watchlist/>
          <Comingsoon/>
          <Toprated/>
          <History/>
      <h3 style={{  opacity:'0.6', paddingLeft:'8%', paddingTop:'5%'}}    >
        General
      </h3>
          <Setting/>
          <Login/>
      

    </div>
  )
}

export default Menu