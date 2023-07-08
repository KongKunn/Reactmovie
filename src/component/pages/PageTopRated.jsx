import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import Component from "../Component";
import Content from "../Main/Content/Content";
import { Outlet} from "react-router-dom";


const PageTopRated = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };
  const [toprate, setToprate] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setToprate(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Nav />
      <div style={{ width: "75em", marginLeft: "25%" }}>
        <Header />
        
        <Content movies={toprate} />
        <Outlet/>
      </div>
    </>
  );
};

export default PageTopRated;
