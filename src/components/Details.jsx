import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`https://www.omdbapi.com/?apikey=7b54a5cb&i=${id}`)
      .then((res) => {
        if (res.data.Response === "False") {
          setIsError(true);
        } else {
          setIsLoading(true);
          setMovieDetails(res.data);
        }
      });
  }, [id]);

  return (
    <div>
      {isLoading && (
        <div className="movieDetailsContainer">
          <div>
            <img src={movieDetails.Poster} alt="" />
          </div>
          <div>
            <h2> {movieDetails.Title} </h2>
            <div className="movieDetails">
              <h3>Plot: </h3>
              {movieDetails.Plot}
            </div>

            <div className="movieDetails">
              <h3>Actors: </h3>
              {movieDetails.Actors}
            </div>
            <div className="movieDetails">
              <h3>IMDB rating: </h3>
              {movieDetails.imdbRating}
            </div>
            <div className="movieDetails">
              <h3>Duration: </h3>
              {movieDetails.Runtime}
            </div>
          </div>
        </div>
      )}
      <div>{isError && <h2>Movie Not Found</h2>}</div>
    </div>
  );
};

export default Details;
