import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from "uuid";

import Todo from "./todo";

let container = null;
const todo = {
  content: "This is a test",
  id: uuidv4(),
  completed: false,
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render the todo item", () => {
  act(() => {
    render(<Todo todo={todo} />, container);
  });
  expect(container.textContent).toBe("This is a test✎");
});
