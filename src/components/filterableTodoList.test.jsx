import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import FilterableTodoList from "./filterableTodoList";
import { todos } from "../test/fixtures";

afterEach(cleanup);

test("<FilterableTodoList />", () => {
  const { getByPlaceholderText, getByText, getByLabelText } = render(
    <FilterableTodoList todos={todos} />
  );
  const inputBox = getByPlaceholderText("Enter new todo...");
  fireEvent.change(inputBox, { target: { value: "Take the cat to walk" } });

  const submitButton = getByText("+");
  fireEvent.click(submitButton);

  const newTodo = getByLabelText("Take the cat to walk");
  expect(newTodo).toBeInTheDocument();
});
