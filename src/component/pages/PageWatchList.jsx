import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import Component from "../Component";
import Main from "../Main/Main";
import Content from "../Main/Content/Content";
import "./Page.css"
import Pagination from "../Main/Pagination/Pagination";
const PageWatchList = () => {
   const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };
    const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const urlSearch = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`;
      fetch(urlSearch, options)
        .then((response) => response.json())
        .then((response) => {
          setMovies(response.results);
        });
    };

    fetchData();
  }, [currentPage]);

  const handlePageClick = (data) => {
    const selectpage = data.selected + 1;
    console.log("XX", data);
    setCurrentPage(selectpage);
    console.log(selectpage);
  };
  return (
    <>
      <Nav />
      <div className="body_page">
        <Header />
        <div style={{paddingTop:'6%'}}>
        <Content movies={movies} />
        </div>
        <Pagination
        handleclick = {handlePageClick}
        />
      </div>
    </>
  );
};

export default PageWatchList;
