import { useState } from "react";
import axios from "axios";
import Card from "./Card";

function Search() {
  const [movieResult, setMovieResult] = useState([]);
  const [isError, setIsError] = useState(false);

  const searchMovies = (e) => {
    e.preventDefault();
    const searchInput = document.querySelector("#msearch");
    axios
      .get(
        encodeURI(
          `https://www.omdbapi.com/?apikey=7b54a5cb&s=${searchInput.value}`
        )
      )
      .then((res) => {
        setIsError(false);
        if (res.data.Response === "False") {
          console.log(res.data.Error);
          setIsError(true);
        }
        setMovieResult(res.data.Search);
      })
      .catch((error) => {
        console.log("Error", error.message);
        console.log(error.config);
      });
  };

  return (
    <div className="container">
      <div className="search-container">
        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Search..."
            name="msearch"
            id="msearch"
          />
        </form>
      </div>
      <div className="App movies">
        {movieResult &&
          movieResult.map((movie) => <Card movie={movie} key={movie.imdbID} />)}
      </div>
      <div>{isError && <h2>Movie Not Found</h2>}</div>
    </div>
  );
}

export default Search;
