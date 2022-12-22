import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    fetchList(page);
  }, [page]);

  const fetchList = (page) => {
    if (page < totalPages) {
    }
    axios
      .get(
        encodeURI(
          `https://www.omdbapi.com/?apikey=7b54a5cb&s=star wars&page=${page}`
        )
      )
      .then((res) => {
        setTotalPages(Math.ceil(res.totalResults / 10));
        setList([...list, ...res.data.Search]);
      });
  };

  return (
    <div className="container">
      <div className="App movies">
        {list.map((movie) => (
          <Card movie={movie} key={movie.imdbID} />
        ))}
      </div>
      <div className="flex-end">
        <button
          className="btn"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page > totalPages}
        >
          {" "}
          More
        </button>
      </div>
    </div>
  );
}

export default Home;
