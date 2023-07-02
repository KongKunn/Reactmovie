import React from "react";
import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div className="menu_button">
      <Link to="/Setting">
        <button>
          <i className="fas fa-calendar-alt"></i>
          Setting
        </button>
      </Link>
    </div>
  );
};

export default Setting;
