import { render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "./Home";

jest.mock("axios");

test.skip("renders details of a movie", async () => {
  const movieDetails = {
    data: {
      Search: [
        { imdbID: "test123Id", Poster: "sample_poster1" },
        { imdbID: "test1234Id", Poster: "sample_poster2" },
      ],
    },
  };

  axios.get.mockResolvedValueOnce(movieDetails);

  render(<Home />);

  expect(axios.get).toHaveBeenCalled();

  const cardElements = await screen.findByAltText("Movies");
  expect(cardElements).toBeInTheDocument();
});
