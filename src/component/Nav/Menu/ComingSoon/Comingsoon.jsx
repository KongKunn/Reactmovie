import React from "react";
import { Link } from "react-router-dom";
const Comingsoon = () => {
  return (
    <div className="menu_button">
      <Link to="/ComingSoon">
        <button>
          <i className="fas fa-calendar-alt"></i>
          Coming Soon
        </button>
      </Link>
    </div>
  );
};

export default Comingsoon;
