import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";

jest.mock("axios");

test("renders details of a movie", async () => {
  const movieDetails = {
    data: {
      Search: [
        { imdbID: "test123Id", Poster: "sample_poster1" },
        { imdbID: "test1234Id", Poster: "sample_poster2" },
      ],
    },
  };

  axios.get.mockResolvedValueOnce(movieDetails);

  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );

  const inputSearch = screen.getByRole("searchbox", { name: "Search" });
  expect(inputSearch).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: "Submit" });
  expect(submitButton).toBeInTheDocument();

  const user = userEvent.setup();

  await user.type(inputSearch, "sample");
  await user.click(submitButton);
  expect(axios.get).toHaveBeenCalled();

  const cardElements = await screen.findAllByAltText("Movies");
  expect(cardElements).toHaveLength(2);
});
