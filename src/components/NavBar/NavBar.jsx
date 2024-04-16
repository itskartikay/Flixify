// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `/search/${searchQuery}`;
      setSearchQuery(''); // Clear the search query after navigation
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className='logo'>Flixify</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Discover</Link>
        <Link to="/trending" className="nav-link">Trending</Link>
        <Link to="/new-releases" className="nav-link">New Releases</Link>
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="search-button" onClick={handleSearch}>Search</div>
      </form>
    </div>
  );
};

export default NavBar;
