import React, { useState, useEffect } from "react";
import "swiper/swiper-bundle.min.css";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import './SlideShow.css'

function SlideShow() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]} // Thêm modules vào Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {movies.slice(0, 5).map((movie => (
             <SwiperSlide key = {movie.poster_path}>
              
             <img className="img_slidehow" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />           
           </SwiperSlide>
        )
        ))}
      </Swiper>
    </div>
  );
}

export default SlideShow;
