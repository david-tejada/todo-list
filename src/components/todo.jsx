import React from "react";

export default function Todo(props) {
  const todo = props.todo;
  function handleChange(e) {
    props.onTodoCheckChange(todo);
  }

  const className = todo.completed ? "todo todo-completed" : "todo";
  return (
    <>
      <li className={className} data-testid="todo-item">
        <input
          type="checkbox"
          id="completed"
          todo={todo}
          checked={todo.completed}
          onChange={handleChange}
        />
        <label htmlFor="completed">{todo.content}</label>
        <button>✎</button>
      </li>
    </>
  );
}
