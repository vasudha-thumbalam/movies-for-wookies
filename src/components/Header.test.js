import { render, screen } from "@testing-library/react";
import Header from "./Header";

test.skip("header with home and search", () => {
  render(<Header />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
