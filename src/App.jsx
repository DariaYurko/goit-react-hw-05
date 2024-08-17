import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

// --------- Components
import MovieCast from './components/MovieCast/MovieCast';
import Navigation from './components/Navigation/Navigation';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Loader from './components/Loader/Loader';
// --------------------/

// --------------- Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// --------------------/

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
