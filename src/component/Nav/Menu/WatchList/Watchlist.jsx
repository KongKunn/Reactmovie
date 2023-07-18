import React from "react";
import "../Menu.css";
import { NavLink } from "react-router-dom";

const Watchlist = () => {
  return (
    <div className="menu_button">
      <NavLink to="/WatchList">
        <button>
          <i class="fas fa-list"></i>
          WatchList
        </button>
      </NavLink>
    </div>
  );
};

export default Watchlist;
