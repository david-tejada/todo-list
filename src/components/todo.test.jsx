import React from "react";
import { render, screen } from "@testing-library/react";

import Todo from "./todo";

const pendingTodo = {
  content: "This is a pending todo",
  id: "25fac6bd-da12-48c8-b76b-74612c09e4bd",
  completed: false,
};

const completedTodo = {
  content: "This is a completed todo",
  id: "25fac6bd-da12-48c8-b76b-74617c09e4bd",
  completed: true,
};

it("renders the todo item with the right text", () => {
  render(<Todo todo={pendingTodo} />);
  screen.debug();
  expect(screen.getByTestId("todo-item")).toHaveTextContent(
    "This is a pending todo"
  );
  expect(screen.getByLabelText("This is a pending todo").id).toBe("completed");
});
