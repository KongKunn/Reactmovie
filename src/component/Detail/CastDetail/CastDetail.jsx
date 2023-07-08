import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CastDetail.css";
const CastDetail = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4 ,
    slidesToScroll: 2,
  };
  const [cast, setCast] = useState([]);
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
      `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("CAST", response);
        setCast(response.cast);
      })
      .catch((err) => console.error(err));
  }, [params.id]);
  console.log("PÂP", cast);
  return (
    < div className="billcast">
           <h2>Top Billed Cast</h2>
<Slider {...sliderSettings}>
      {cast.map((actor) => (
        <div className="button_cast">
          <button key={actor.id} className="actor-button">
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <span>{actor.name}</span>
          </button>
        </div>
      ))}
    </Slider>
    </ div>
    
  );
};
export default CastDetail;
