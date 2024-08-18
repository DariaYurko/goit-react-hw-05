import { useEffect, useState } from 'react';
import { fetchMovieBySearch } from '../../services/movies-api';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

import { Toaster } from 'react-hot-toast';
import { sendNoteEmptyField, sendNoteBadRequest } from '../../services/messages';
// ----------------------------------------------------------/

const HomePage = ({ loading, setLoading }) => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  // --------------------------------------------------------/
  useEffect(() => {
    if (!query) return;
    
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieBySearch(query);
        setMovies(data.data.results);

        console.log(data.data.results);
        if (data.data.results.length === 0) {
          sendNoteBadRequest();
        }
        
      } catch (err) {
        console.log(err.message);

      } finally {
        setLoading(false);
      }
    };
    
    fetchMovie();
  }, [query]);
  // --------------------------------------------------------/
  
  const onSearch = queryValue => {
 
    setSearchParams({
      query: queryValue,
    });

    //------------------------------------------------------/
    if (queryValue === '') {
      sendNoteEmptyField();
      // console.log('You must enter the name of the movie in the input field');
    }
    //------------------------------------------------------/
  };

  return (
    <section className="moviePage">
      <SearchForm onSearch={onSearch} />

      <MovieList movies={movies} />

      {loading && <Loader />}

      <Toaster />
    </section>
  );
};

export default HomePage;
