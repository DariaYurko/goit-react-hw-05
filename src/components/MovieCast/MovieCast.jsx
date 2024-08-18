import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from '../../services/movies-api';
import css from './MovieCast.module.css';
import Loader from '../Loader/Loader';

const MovieCast = ({ loading, setLoading }) => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams(); // movieId

  // console.log('params from  Cast', params);

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        setLoading(true);
        const { data } = await fetchCastMovie(movieId);
        setCast(data.cast);
      } catch (err) {
         console.log(err.message);
         
      } finally {
        setLoading(false);
      }
    };

    getCastInfo();
  }, []);

  //   console.log(cast);

  return (
    <>
      {loading && <Loader />}
      {cast.length === 0 ? (
        <p>We dont have any information</p>
      ) : (
        <ul className={css.actorList}>
          {cast.map(actor => {
            return (
              <li key={actor.id} className={css.actorItem}>
                {actor.profile_path !== null ? (
                  <div className={css.actorPhoto}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      alt={actor.name}
                      className={css.actorImg}
                    />
                  </div>
                ) : (
                  <div className={css.actorPhoto}>
                    <img
                      src={`https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster`}
                      alt=""
                      className={css.actorImg}
                    />
                  </div>
                )}

                <div className={css.actorInfo}>
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
