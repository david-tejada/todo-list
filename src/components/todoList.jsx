import { useState } from "react";
import Todo from "./todo";
import Filter from "./filter";

export default function TodoList({ todos, onCheck }) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos?.filter((todo) => {
    if (filter == "pending") {
      return !todo.completed;
    }
    if (filter == "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <Filter activeFilter={filter} onFilterChange={setFilter} />
      <ul>
        {filteredTodos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCheck={() => {
              onCheck(todo);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
