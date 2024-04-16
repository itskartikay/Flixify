// SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchResultsPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fe525ec6dbf92f79e3f9bef4fa1f19a5&query=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <>
      <h2 className='page-title'>Search Results for "{query}"</h2>
      <div className='page-main'>
        {searchResults.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
            <div className="movie-container">
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
              <h3 className='movie-title'>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SearchResultsPage;
