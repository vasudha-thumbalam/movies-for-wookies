import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/details/${movie.imdbID}`}>
        <div>
          <img className="poster" src={movie.Poster} alt="Movies" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
