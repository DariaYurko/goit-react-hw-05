import { useEffect, useState } from 'react';
import {fetchMovieBySearch} from '../services/movies-api'
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';


const HomePage = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);

  const onSearch = queryValue => {
    setQuery(queryValue);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieBySearch(query);
         console.log(data.data.results);
         setMovies(data.data.results);
      } catch (err) {
        console.log(err.message);
      }
   };
   fetchMovie();
}, [query]);

  return (
    <section className="homePage">
      <SearchForm onSearch={onSearch} />
      <MovieList movies={movies} />
    </section>
  );
};

export default HomePage;
