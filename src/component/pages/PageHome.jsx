import React, { useState, useEffect } from "react";
import Component from "../Component";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Content from "../Main/Content/Content";
import Body from "../Main/Body/Body";
import PageTopRated from "./PageTopRated";
import PageComingSoon from "./PageComingSoon";
import "./PageHome.css";
import { Pagination } from "swiper";
import { auth } from "../../firebase";

import {  onAuthStateChanged } from "firebase/auth";

const PageHome = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setUpcoming(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
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

  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setWatchlist(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const [nowplaying, setNowplaying] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNowplaying(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
   
      <Nav />

      <Main>
      
        <Body />
        
        <>
        <Link to="/ComingSoon">
          <button>
            <h3 className="Lists_movies">Watchlist</h3>
          </button>
        </Link>
        <Content movies={upcoming.slice(0, 5)} />
        </>
        

        <Link className="link" to="/WatchList">
          <button>
            <h3 className="Lists_movies">NowPlaying</h3>
          </button>
        </Link>
        <Content movies={nowplaying.slice(0, 5)} />

        <Link className="link" to="/TopRated">
          <button>
            <h3 className="Lists_movies">Popular</h3>
          </button>
        </Link>
        <Content movies={watchlist.slice(0, 5)} />
        <Link className="link" to="/TopRated">
          <button>
            <h3 className="Lists_movies">TopRated</h3>
          </button>
        </Link>
        <Content movies={toprate.slice(0, 5)} />

 
      </Main>
    </>
  );
};

export default PageHome;
