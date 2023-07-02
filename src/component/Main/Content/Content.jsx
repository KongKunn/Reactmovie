import React, { useEffect, useState } from "react";
import "./Content.css";

const Content = ({ movies }) => {
  console.log("MOVIE",movies);
  return (
    <>
    
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.backdrop_path} className="movie-item">
            <div className="movie-image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-details">
              <h2 className="movie-name">{movie.title}</h2>
              <p className="movie-date">{movie.date}</p>
              <p className="movie-rating">Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
