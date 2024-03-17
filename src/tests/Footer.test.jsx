import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

test("Footer renders the text correctly", () => {
  render(<Footer />);
  const message = screen.queryByText(/Fountainebleau/i);
  expect(message).toBeTruthy();
});