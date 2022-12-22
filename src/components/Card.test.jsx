import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

test("render movie card", () => {
  const movieData = { imdbID: "test123Id", Poster: "sample_poster" };
  render(
    <BrowserRouter>
      <Card movie={movieData} />
    </BrowserRouter>
  );

  const imgElement = screen.getByAltText(/Movies/i);
  expect(imgElement).toBeInTheDocument();
});
