import { render, screen } from "@testing-library/react";
import axios from "axios";
import Details from "./Details";

jest.mock("axios");

test("renders details of a movie", async () => {
  const movieDetails = {
    data: {
      Title: "Star Wars Test Movie",
    },
  };

  axios.get.mockResolvedValueOnce(movieDetails);

  render(<Details />);

  expect(axios.get).toHaveBeenCalled();

  const titleElement = await screen.findByText(/Star Wars Test Movie/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders error message", async () => {
  const movieDetails = {
    data: {
      Response: "False",
    },
  };

  axios.get.mockResolvedValueOnce(movieDetails);

  render(<Details />);

  expect(axios.get).toHaveBeenCalled();

  const errorElement = await screen.findByText(/Movie Not Found/i);
  expect(errorElement).toBeInTheDocument();
});
