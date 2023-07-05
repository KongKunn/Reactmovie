import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Header from '../Main/Header/Header';
import Detail from '../Detail/Detail';

const PageDetail = () => {
  const [movie, setMovie] = useState({});
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
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,options)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  console.log("id", movie.title);

  return (
    <div>
      <Nav/>
      <Header/>
      <Detail/>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src="" alt="" />
      <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
    </div>
  );
};

export default PageDetail;
