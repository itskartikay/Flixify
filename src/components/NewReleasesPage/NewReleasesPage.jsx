import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../global.css";

const NewReleasesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=fe525ec6dbf92f79e3f9bef4fa1f19a5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching new releases:', error);
      }
    };
    fetchNewReleases();
  }, []);

  return (
    <>
      <h2 className='page-title'>New Releases</h2>
      <div className='page-main'>
        {movies.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="movie-link"> {/* Wrap the title in Link component */}
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
              <h3 className='movie-title'>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewReleasesPage;
