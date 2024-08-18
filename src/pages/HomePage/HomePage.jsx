import { useEffect, useState } from 'react';
import { fetchTrandingMoviesData } from '../../services/movies-api';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const HomePage = ({ loading, setLoading }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // if (movies.length === 0) return;

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
  }, [setLoading]);

  // console.log(movies);

  return (
    <section className="homePage">
      {loading && <Loader />}
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
    </section>
  );
};

export default HomePage;
