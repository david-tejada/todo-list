import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Todo from "./todo";

afterEach(cleanup);

const pendingTodo = {
  content: "Pending todo",
  id: "7cp",
  completed: false,
};

const completedTodo = {
  content: "Completed todo",
  id: "fg8",
  completed: true,
};

const onCheck = jest.fn();

test("Pending <Todo />", () => {
  const { getByRole, getByText } = render(
    <Todo todo={pendingTodo} onCheck={onCheck} />
  );

  const checkbox = getByRole("checkbox");
  const label = getByText("Pending todo");
  expect(label).toContainElement(checkbox);
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(onCheck).toBeCalled();
});

test("Completed <Todo />", () => {
  const { getByRole, getByText } = render(
    <Todo todo={completedTodo} onCheck={onCheck} />
  );

  const checkbox = getByRole("checkbox");
  const label = getByText("Completed todo");
  expect(label).toContainElement(checkbox);
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(onCheck).toBeCalled();
});
