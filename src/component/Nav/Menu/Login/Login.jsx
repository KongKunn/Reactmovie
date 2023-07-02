import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="menu_button">
      <Link to="/Login">
        <button>
          <i className="fas fa-calendar-alt"></i>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Login;
