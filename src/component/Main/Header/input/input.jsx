import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setResponse } from "../../../Redux/SliceSearch";
import { setSearchString } from "../../../Redux/SliceSearch";
import "./input.css";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Input = () => {
  
  const [input, setInput] = useState("");
  // const [searchWord, setSearchWord] = useState(searchSing);

  // const dispatch = useDispatch();
  // const searchSing = useSelector((state) => state.searchResponse.searchWord);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
  //   },
  // };

  // const [input, setInput] = useState("");
  // const [searchWord, setSearchWord] = useState(searchSing);

  // useEffect(() => {
  //   const fetchData = () => {
  //     const urlSearch =
  //       "https://api.themoviedb.org/3/search/movie?query=" +
  //       searchWord +
  //       "&include_adult=false&language=en-US&page=1";
  //     fetch(urlSearch, options)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log("RRResponse: ", response);
  //         dispatch(setResponse(response.results));
  //       });
  //   };

  //   fetchData();
  // }, [searchWord]);
  // const handleOnclick = () => {
  //   dispatch(setSearchString(searchWord));
  // };
  const handleChangeInput = (value) => {
    setInput(value);
    // setSearchWord(value);
  };
// ------------- QUERYPARAMS------
const [searchParams, setSearchParams] = useSearchParams();

const navigate = useNavigate();
const handleClick = () => {
  navigate({
    pathname: "/QuerySearch",
    search: createSearchParams({
      searchWord: input
    }).toString()
})
  //setSearchParams({ myParam: "bobby_hadz" });
};

  return (
    <div className="main_input">
      {/* <Link to="/Search">
        <button onClick={handleOnclick}>Search</button>
      </Link> */}

      <button onClick={handleClick}>QuerySearch</button>
      <input
        className="input"
        type="text"
        autoComplete="off"
        name="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => handleChangeInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
