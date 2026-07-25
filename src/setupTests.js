import "@testing-library/jest-dom";

Object.defineProperty(
  HTMLCanvasElement.prototype,
  "getContext",
  {
    value: jest.fn(() => ({})),
  }
);

Object.defineProperty(
  window,
  "scrollTo",
  {
    value: jest.fn(),
    writable: true,
  }
);

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    this.callback([
      {
        isIntersecting: true,
        target: element,
      },
    ]);
  }

  unobserve() {}

  disconnect() {}
}

Object.defineProperty(
  window,
  "IntersectionObserver",
  {
    value: IntersectionObserverMock,
    writable: true,
  }
);

Object.defineProperty(
  global,
  "IntersectionObserver",
  {
    value: IntersectionObserverMock,
    writable: true,
  }
);