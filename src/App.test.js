import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Nabil's professional portfolio", () => {
  render(<App />);

  expect(
    screen.getAllByText(/NABIL AJWAD ROSEDI/i).length
  ).toBeGreaterThan(0);

  expect(
    screen.getAllByText(/Senior Software Engineer/i).length
  ).toBeGreaterThan(0);
});