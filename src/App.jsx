import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import TrendingPage from './components/TrendingPage/TrendingPage';
import NewReleasesPage from './components/NewReleasesPage/NewReleasesPage';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<DiscoverPage/>} />
          <Route path="/trending" element={<TrendingPage/>} />
          <Route path="/new-releases" element={<NewReleasesPage/>} />
          <Route path="/movie/:id" element={<MovieDetailPage/>} />
          <Route path="/search/:query" element={<SearchResultsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
