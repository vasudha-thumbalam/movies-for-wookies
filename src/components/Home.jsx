import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import Header from "./Header";

function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchList(1);
  }, []);

  const fetchList = (page) => {
    axios
      .get(
        encodeURI(
          `https://www.omdbapi.com/?apikey=7b54a5cb&s=star wars&page=${page}`
        )
      )
      .then((res) => {
        setList([...list, ...res.data.Search]);
        console.log(res.data.Search);
      });
  };

  return (
    <div>
      <Header />
      <div className="App">
        {list.map((movie) => (
          <Card movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

export default Home;
