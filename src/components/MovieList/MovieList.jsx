import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
   
   const location = useLocation();
   // console.log('location from List', location);

   return (
      <ul>
         {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title} ({movie.release_date.slice(0, 4)})
                </Link>
              </li>
            );
         })}
      </ul>
   )
}

export default MovieList;