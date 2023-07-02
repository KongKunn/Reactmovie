import React from "react";
import "../Menu.css";
import { Link } from "react-router-dom";

const Watchlist = () => {
  return (
    <div className="menu_button">
      <Link to="/WatchList">
        <button>
          <i class="fas fa-list"></i>
          WatchList
        </button>
      </Link>
    </div>
  );
};

export default Watchlist;
