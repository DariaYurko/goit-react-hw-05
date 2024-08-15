import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

// --------- Components
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'

import './App.css';

function App() {
 

  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
