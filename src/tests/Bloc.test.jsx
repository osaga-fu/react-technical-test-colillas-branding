import { render, screen } from "@testing-library/react";
import Bloc from "../components/BlocFolder/Bloc";

test("Bloc renders the text correctly", () => {
  render(<Bloc />);
  const message = screen.queryByText(/odio sit vitae/i);
  expect(message).toBeTruthy();
});