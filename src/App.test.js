import App from "./App";
import { render, screen } from "@testing-library/react";

test("點擊次數:0", () => {
  render(<App />);
  const title = screen.getByTestId("counter");
  expect(title.innerHTML).toBe("點擊次數:0");
});
