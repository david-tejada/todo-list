import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TodoWidget from "./todoWidget";
import { todos } from "../test/fixtures";

afterEach(cleanup);

test("<TodoWidget />", () => {
  const { getByPlaceholderText, getByText, getByLabelText } = render(
    <TodoWidget todos={todos} />
  );
  const inputBox = getByPlaceholderText("Enter new todo...");
  fireEvent.change(inputBox, { target: { value: "Take the cat to walk" } });

  const submitButton = getByText("+");
  fireEvent.click(submitButton);

  const newTodo = getByLabelText("Take the cat to walk");
  expect(newTodo).toBeInTheDocument();
});
