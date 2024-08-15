import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
   return (
      <ul>
         {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to="/movies/:movieId">{movie.title}</Link>
              </li>
            );
         })}
      </ul>
   )
}

export default MovieList;