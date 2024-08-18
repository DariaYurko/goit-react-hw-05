import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

// --------- Components
import MovieCast from './components/MovieCast/MovieCast';
import Navigation from './components/Navigation/Navigation';
import MovieReviews from './components/MovieReviews/MovieReviews';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Loader from './components/Loader/Loader';
// --------------------/

// --------------- Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// --------------------/

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={<HomePage loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="/movies"
              element={<MoviesPage loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="/movies/:movieId"
              element={
                <MovieDetailsPage loading={loading} setLoading={setLoading} />
              }
            >
              <Route
                path="cast"
                element={
                  <MovieCast loading={loading} setLoading={setLoading} />
                }
              />
              <Route
                path="reviews"
                element={
                  <MovieReviews loading={loading} setLoading={setLoading} />
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
