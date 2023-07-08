import React, { useState, useEffect } from "react";
import "./input.css";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Input = () => {
  const [input, setInput] = useState("");

 
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate({
      pathname: "/QuerySearch",
      search: createSearchParams({
        searchWord: input,
      }).toString(),
    });
  };
const hanldleEnter =(e)=> {
 if( e.key === 'Enter')
 {handleClick()}

}
const handleChangeInput = (e) => {
  console.log(2);
  setInput(e.target.value);
};

  return (
    <div className="main_input">
      <input
        className="input"
        type="text"
        autoComplete="off"
        name="text"
        placeholder="Search..."
        value={input}
        onChange={handleChangeInput}
        onKeyDown={hanldleEnter}
      />
      <button className="search" onClick={handleClick}>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Input;
