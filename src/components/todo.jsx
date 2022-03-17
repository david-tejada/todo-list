import React from "react";

export default function Todo({ todo, onCheck }) {
  const { completed, id } = todo;
  const className = completed ? "todo todo-completed" : "todo";
  return (
    <li className={className}>
      <label htmlFor="completed">
        <input
          type="checkbox"
          id="completed"
          todo={todo}
          checked={completed}
          onChange={() => {
            onCheck(todo);
          }}
        />
        {todo.content}
      </label>
      <button>edit</button>
    </li>
  );
}
