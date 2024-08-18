import { useEffect, useState } from 'react';
import { fetchMovieBySearch } from '../services/movies-api';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';

const HomePage = ({loading, setLoading}) => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');


  useEffect(() => {
    if (!query) return;

    const fetchMovie = async () => {
      try {
        setLoading(true)
        const data = await fetchMovieBySearch(query);
        console.log(data.data.results);
        setMovies(data.data.results);

      } catch (err) {
        console.log(err.message);

      } finally {
        setLoading(false)
      }
    };
    
    fetchMovie();
  }, [query]);

  const handleSubmit = queryValue => {
    setSearchParams({
      query: queryValue,
    });
  };

  return (
    <section className="moviePage">
      <SearchForm onSearch={handleSubmit} />
      {loading && <Loader />}
      <MovieList movies={movies} />
    </section>
  );
};

export default HomePage;
