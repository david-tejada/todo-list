import "./App.css";
import TodoList from "./components/todoList";
import FilterableTodoList from "./components/filterableTodoList";

const todos = [];

function App() {
  return <FilterableTodoList todos={todos} />;
}

export default App;
