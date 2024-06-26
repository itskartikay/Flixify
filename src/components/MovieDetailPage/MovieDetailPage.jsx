// MovieDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailPage.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fe525ec6dbf92f79e3f9bef4fa1f19a5`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie();
  }, [id]);

  const streamNow = (movieId) => {
    const url = `https://vidsrc.to/embed/movie/${movieId}`;
    window.location.href = url; // Navigate to the URL in the same window
  };

  return (
    <div className="details-container">
      <div className="background-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }} />
      {movie && (
        <div className='details-main'>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.overview}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <div className="stream-button" onClick={() => streamNow(movie.id)}>Stream Now</div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailPage;
