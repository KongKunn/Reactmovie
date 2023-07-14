import React from "react";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import PageDetail from "../pages/PageDetail";
import "./Detail.css";
import MovieDetail from "./MovieDetail/MovieDetail";
import CastDetail from "./CastDetail/CastDetail";
import Trailer from "./Trailer/trailer";
import Similar from "./Similar/Similar";

const Detail = ({ movie }) => {
  return (
    <div className="detail">
      <div className="detail_Nav">
        <Nav />
      </div>
      <div className="detail_Header">
        <Header />
        <div className="content_detail">
          <MovieDetail movie={movie} />
        </div>

        <div>
          <CastDetail />
        </div>
        <div>
          <Similar />
        </div>
      </div>
    </div>
  );
};

export default Detail;
