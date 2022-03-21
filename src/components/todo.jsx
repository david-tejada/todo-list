import React from "react";

export default function Todo({ todo, onCheck }) {
  const { content, id, completed } = todo;
  const className = completed ? "todo todo-completed" : "todo";
  return (
    <li className={className}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={() => {
            onCheck();
          }}
        />
        {content}
      </label>
      <button>edit</button>
    </li>
  );
}
