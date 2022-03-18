import "./App.css";
import TodoList from "./components/todoList";
import TodoWidget from "./components/todoWidget";

const todos = [];

function App() {
  return <TodoWidget todos={todos} />;
}

export default App;
