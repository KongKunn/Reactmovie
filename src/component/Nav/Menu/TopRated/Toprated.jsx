import React from "react";
import "../Menu.css";
import { Link } from "react-router-dom";
const Toprated = () => {
  return (
    <div className="menu_button">
      <Link to="/TopRated">
        <button>
          <i class="fas fa-star"></i>
          Top Rated
        </button>
      </Link>
    </div>
  );
};

export default Toprated;
