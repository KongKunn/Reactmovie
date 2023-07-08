import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Similar.css"

const Similar = () => {
  const [similar, setSimilar] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); 
  const params = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("SISS", response);
        setSimilar(response.results);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  const handleShowMore = () => {
    setVisibleCount(similar.length);  
  };

  return (
    <div className="similar-container">
        <h2>Similar</h2>
      {similar.slice(0, visibleCount).map((similar) => (
        <div className="button_cast" key={similar.id}>
          <button className="actor-button">
            <img
              src={`https://image.tmdb.org/t/p/w500/${similar.backdrop_path}`}
              alt={similar.name}
            />
            <span>{similar.title}</span>
          </button>
        </div>
      ))}
      {visibleCount < similar.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          More
        </button>
      )}
    </div>
  );
};

export default Similar;
