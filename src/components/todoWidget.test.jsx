import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TodoWidget from "./todoWidget";
import { todos } from "../test/fixtures";

afterEach(cleanup);

test("<TodoWidget />", () => {
  const { getByPlaceholderText, getByText, getByLabelText, queryByLabelText } =
    render(<TodoWidget todos={todos} />);
  const inputBox = getByPlaceholderText("Enter new todo...");
  fireEvent.change(inputBox, { target: { value: "Take the cat to walk" } });

  const submitButton = getByText("+");
  fireEvent.click(submitButton);

  const newTodo = getByLabelText("Take the cat to walk");
  expect(newTodo).toBeInTheDocument();

  // Filter "pending" selected. If we click on the "pending" todo it should
  // disappear from the document
  let pending = queryByLabelText("Item 0: Pending todo");
  let completed = queryByLabelText("Item 1: Completed todo");
  fireEvent.click(pending);
  fireEvent.click(completed);

  const filterPending = getByLabelText("Pending");
  fireEvent.click(filterPending);
  expect(pending).not.toBeInTheDocument();
  expect(completed).toBeInTheDocument();
  // screen.debug();
});
