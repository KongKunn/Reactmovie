import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import Header from '../../Main/Header/Header';
import Detail from '../Detail';
import MovieDetail from '../MovieDetail/MovieDetail';
import "./trailer.css"

const Trailer = () => {
    const Apikey = '940f41978687eb4d40814ced96c14f72'
    const [trailer, setTrailer] = useState({});
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
    fetch(`http://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${Apikey}`,options)
      .then((response) => response.json())
      .then((response) => {
        setTrailer(response.results[0]);
      })
      .catch((err) => console.error(err));
  }, [params.id]);
      console.log("TRAILERs",trailer);

  return (
    <div className='trailer_detail'>
    <iframe
      width="900"
      height="281"
      src={`https://www.youtube.com/embed/${trailer.key}`}
      title="Trailer"
    ></iframe>
  </div>
  )
}

export default Trailer