import React from "react";

export default function Todo({ todo, onCheck }) {
  const { completed, id } = todo;
  const className = completed ? "todo todo-completed" : "todo";
  return (
    <li className={className}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
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
