import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=7b54a5cb&i=${id}`)
      .then((res) => {
        setMovieDetails(res.data);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <div>
        <h2> Movie Name: {movieDetails.Title} </h2>
        <img src={movieDetails.Poster} alt="" />
      </div>
    </div>
  );
};

export default Details;
