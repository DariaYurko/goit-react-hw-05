import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import css from './App.module.css';

// --------- Components
import MovieCast from '../MovieCast/MovieCast';
import Navigation from '../Navigation/Navigation';
import MovieReviews from '../MovieReviews/MovieReviews';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../Loader/Loader';

// --------------------/

// --------------- Pages
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
// --------------------/

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  loading={loading}
                  setLoading={setLoading}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <MoviesPage
                  loading={loading}
                  setLoading={setLoading}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <MovieDetailsPage
                  loading={loading}
                  setLoading={setLoading}
                  error={error}
                  setError={setError}
                />
              }
            >
              <Route
                path="cast"
                element={
                  <MovieCast
                    loading={loading}
                    setLoading={setLoading}
                    error={error}
                    setError={setError}
                  />
                }
              />
              <Route
                path="reviews"
                element={
                  <MovieReviews
                    loading={loading}
                    setLoading={setLoading}
                    error={error}
                    setError={setError}
                  />
                }
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
