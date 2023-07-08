import React from 'react'
import "./MovieDetail.css"
const MovieDetail = ({movie}) => {
    console.log("MOCVIVAID",movie);
  return (
    <div className='img_detail'>
        <img className='img_backgroud'
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      /> 
      <p>{movie.original_title}</p>
    </div>
    
  ) 
}

export default MovieDetail