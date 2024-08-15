import {Link} from 'react-router-dom'

const MovieDetailsPage = () => {
   return (
     <>
       <Link to="/">Go back</Link>
       <p className="title">Info about movie</p>
     </>
   );
}

export default MovieDetailsPage;