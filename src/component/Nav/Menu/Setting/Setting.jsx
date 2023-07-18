import React from "react";
import { NavLink } from "react-router-dom";
const Setting = () => {
  return (
    <div className="menu_button">
      <NavLink to="/Setting">

        <button>
          <i className="fas fa-calendar-alt"></i>
          Favorite
        </button>
      </NavLink>
    </div>
  );
};

export default Setting;
