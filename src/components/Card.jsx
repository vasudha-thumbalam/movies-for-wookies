import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <div>
      <Link to={`/details/${movie.imdbID}`}>
        <div>
          <img src={movie.Poster} alt="Movies" />
        </div>

        <div>
          <h3>{movie.Title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
