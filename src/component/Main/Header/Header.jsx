import React from "react";
import Infor from "./infor/infor";
import Input from "./input/input";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Input />
      <Infor />
    </div>
  );
};

export default Header;
