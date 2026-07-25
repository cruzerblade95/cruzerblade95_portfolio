import "@testing-library/jest-dom";

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  value: jest.fn(() => ({})),
});

Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
});