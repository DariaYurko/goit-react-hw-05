import { useEffect, useRef, useState } from 'react';
import { fetchDetailsMovieData } from '../services/movies-api';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const MovieDetailsPage = ({ loading, setLoading }) => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [genres, setGenres] = useState([]);

  const params = useParams();     // movieId
  const movieId = params.movieId;

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  // console.log('location from Details', location);

  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchDetailsMovieData(movieId);
        setMovieInfo(data.data);
        setGenres(data.data.genres);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  //   console.log(movieInfo);
  //   console.log(genres);

  return (
    <section className="details">
      <Link to={backLinkRef.current}>Go back</Link>
      {loading && <Loader />}
      <div className="content">
        <div className="mainBlok">
          <div className="tumbPoster">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movieInfo.poster_path}`}
              alt="qwqw"
              className="poster"
            />
          </div>
          <div>
            <h2>
              {movieInfo.title}&nbsp; ({movieInfo.release_date})
            </h2>
            <p>User Score: {movieInfo.vote_average}</p>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="additionalBlok">
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
            <div>
              <Outlet />
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
