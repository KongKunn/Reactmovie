import React from "react";
import { NavLink } from "react-router-dom";
const Comingsoon = () => {
  return (
    <div className="menu_button">
      <NavLink to="/ComingSoon">
        <button>
          <i className="fas fa-calendar-alt"></i>
          Coming Soon
        </button>
      </NavLink>
    </div>
  );
};

export default Comingsoon;
