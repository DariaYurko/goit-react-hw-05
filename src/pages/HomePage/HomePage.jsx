import { useEffect, useState } from 'react';
import { fetchTrandingMoviesData } from '../../services/movies-api';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const HomePage = ({ loading, setLoading, error, setError }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrandingMoviesData();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setLoading, setError]);

  // console.log(movies);

  return (
    <section className="homePage">
      <h1>TOP the most popular movies today</h1>
      {loading && <Loader />}
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
    </section>
  );
};

export default HomePage;
