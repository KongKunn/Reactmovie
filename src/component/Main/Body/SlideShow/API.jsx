// import React from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import './slide.css'

// const API = ({movieList}) => {
//   console.log('movieLSS',movieList);
  
//   return (
//    <div className='slide_show'>
// <Swiper
//     modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       autoplay={{ delay: 2000 }}
//       loop={true}
//     >
//          {movieList.slice(0, 5).map((movie => (
//             <SwiperSlide key = {movie.poster_path}>
              
//               <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />           
//             </SwiperSlide>
//          )))}
//     </Swiper>
//    </div>
    
//   );
// };

// export default API;
