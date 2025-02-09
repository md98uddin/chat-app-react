import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/john/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render chatview for john", () => {
  render(<App />);
  const findContactName = screen.getAllByTestId("setChatView-btn");
  fireEvent.click(findContactName.at(0));
  const chatViewElement = screen.getByTestId("chatview-div");
  expect(chatViewElement).toBeInTheDocument();
});

test("should send a text /hello/ to john", () => {
  render(<App />);
  const findContactName = screen.getAllByTestId("setChatView-btn");
  fireEvent.click(findContactName.at(0));
  const getInputElement = screen.getAllByTestId("text-input");
  expect(getInputElement[0]).toBeInTheDocument();
  getInputElement[0].innerHTML = "hello world";
  const getSendBtn = screen.getAllByTestId("send-btn");
  expect(getSendBtn[0]).toBeInTheDocument();
  fireEvent.click(getSendBtn[0]);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
