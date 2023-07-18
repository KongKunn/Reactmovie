import React from 'react'
import { NavLink } from "react-router-dom";
const History = () => {
  return (
    <div className="menu_button">
      <NavLink to="/History">
        <button>
          <i className="fas fa-calendar-alt"></i>
         History
        </button>
      </NavLink>
    </div>
  )
}

export default History