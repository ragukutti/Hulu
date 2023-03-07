
import React from 'react'
import './card.css'
const Videocard = ({movie}) => {
    const base_Url = "https://image.tmdb.org/t/p/original"
  return (
        <div  className="videoCard">
         <img
         src={`${base_Url}${movie.backdrop_path || movie.poster_path}`}
         alt="movie poster"
        />
        <h2>{movie.title || movie.orignal_name || movie.name}</h2>
        <p className="videoCard__stats">
        ReleaseDate:{movie.release_date || movie.first_air_date}
        </p>
    </div>
  )
} 

export default Videocard