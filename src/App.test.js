import {
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

jest.mock(
  "./components/Particle",
  () =>
    function MockParticle() {
      return null;
    }
);

test("renders Nabil's professional portfolio", () => {
  render(<App />);

  expect(
    screen.getAllByText(/Nabil Ajwad/i).length
  ).toBeGreaterThan(0);

  expect(
    screen.getByText(/Explore my work/i)
  ).toBeInTheDocument();
});