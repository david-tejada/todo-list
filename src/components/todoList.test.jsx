import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TodoList from "./todoList";
import { todos } from "../test/fixtures";

const onCheck = jest.fn();

afterEach(cleanup);

test("<TodoList />", () => {
  const { getByLabelText, queryByLabelText } = render(
    <TodoList todos={todos} onCheck={onCheck} />
  );

  const filterAll = getByLabelText("All");
  const filterCompleted = getByLabelText("Completed");
  const filterPending = getByLabelText("Pending");

  expect(filterAll).toBeChecked();

  function getCheckboxes() {
    return [
      queryByLabelText("Item 0: Pending todo"),
      queryByLabelText("Item 1: Completed todo"),
    ];
  }

  // Default filter "all" selected. All the todos are present
  let [pending, completed] = getCheckboxes();
  expect(pending).not.toBeChecked();
  expect(completed).toBeChecked();

  // Filter "pending" selected. Only the pending todos are present
  fireEvent.click(filterPending);
  expect(filterPending).toBeChecked();
  [pending, completed] = getCheckboxes();
  expect(pending).toBeInTheDocument();
  expect(completed).not.toBeInTheDocument();

  // Filter "completed" selected. Only the completed todos are present
  fireEvent.click(filterCompleted);
  expect(filterCompleted).toBeChecked();
  [pending, completed] = getCheckboxes();
  expect(pending).not.toBeInTheDocument();
  expect(completed).toBeInTheDocument();
});
