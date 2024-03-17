import { render, screen } from "@testing-library/react";
import Advantages from "../components/Advantages/Advantages";

test("Advantages renders the name Bailee correctly", () => {
  render(<Advantages />);
  const message = screen.queryByText(/Bailee/i);
  expect(message).toBeTruthy();
});

test("Advantages renders the name Henry correctly", () => {
  render(<Advantages />);
  const message = screen.queryByText(/Henry/i);
  expect(message).toBeTruthy();
});

test("Advantages renders the name Laurence correctly", () => {
  render(<Advantages />);
  const message = screen.queryByText(/Laurence/i);
  expect(message).toBeTruthy();
});

test("Advantages renders the name Pauline correctly", () => {
  render(<Advantages />);
  const message = screen.queryByText(/Pauline/i);
  expect(message).toBeTruthy();
});