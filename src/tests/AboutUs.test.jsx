import { render, screen } from "@testing-library/react";
import AboutUs from "../components/AboutUs/AboutUs";

test("AboutUs renders the text correctly", () => {
  render(<AboutUs />);
  const message = screen.queryByText(/position/i);
  expect(message).toBeTruthy();
});