import { useState } from "react";
import NewTodo from "./newTodo";
import TodoList from "./todoList";

export default function TodoWidget(props) {
  const [todos, setTodos] = useState(props.todos);

  function handleCheckChange(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            id: todo.id,
            content: todo.content,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function addTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  return (
    <div>
      <NewTodo onNewTodo={addTodo} />
      <TodoList todos={todos} onCheck={handleCheckChange} />
    </div>
  );
}
