import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";

test("點擊次數:0", () => {
  render(<App />);
  const title = screen.getByTestId("counter");
  expect(title.innerHTML).toBe("點擊次數:0");
});

test("點擊+後，點擊次數:1", () => {
  render(<App />);
  const button = screen.getByText("+1");
  fireEvent.click(button);
  const title = screen.getByTestId("counter");
  expect(title.innerHTML).toBe("點擊次數:1");
});

test("點擊-後，點擊次數:-1", () => {
  render(<App />);
  const button = screen.getByText("-1");
  fireEvent.click(button);
  const title = screen.getByTestId("counter");
  expect(title.innerHTML).toBe("點擊次數:-1");
});

test("點擊兩次-後，點擊次數:-2", () => {
  render(<App />);
  const button = screen.getByText("-1");
  fireEvent.click(button);
  fireEvent.click(button);
  const title = screen.getByTestId("counter");
  expect(title.innerHTML).toBe("點擊次數:-2");
});
