import { useEffect, useState } from 'react';
import { fetchTrandingMoviesData } from '../services/movies-api';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrandingMoviesData();
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  console.log(movies);

  return (
     <section className="homePage">
       <MovieList movies={movies} />
    </section>
  );
};

export default HomePage;
