import React from "react";
//import "../Menu.css";
import { NavLink } from "react-router-dom";
const Toprated = () => {
  return (
    <div className="menu_button">
      <NavLink to="/TopRated">
        <button>
          <i class="fas fa-star"></i>
          Top Rated
        </button>
      </NavLink>
    </div>
  );
};

export default Toprated;
