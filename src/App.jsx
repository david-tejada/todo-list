import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [];

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.props.onFilterChange(event.target.value);
  }

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          id="filterAll"
          name="filter"
          value="all"
          onChange={this.handleChange}
        />
        <label htmlFor="filterAll">All</label>
        <input
          type="radio"
          id="filterPending"
          name="filter"
          value="pending"
          onChange={this.handleChange}
        />
        <label htmlFor="filterPending">Pending</label>
        <input
          type="radio"
          id="filterCompleted"
          name="filter"
          value="completed"
          onChange={this.handleChange}
        />
        <label htmlFor="filterCompleted">Completed</label>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // event.preventDefault();
    const todo = this.props.todo;
    this.props.onTodoCheckChange(todo);
  }

  render() {
    const todo = this.props.todo;
    const className = todo.completed ? "todo todo-completed" : "todo";
    return (
      <li className={className}>
        <input
          type="checkbox"
          id="completed"
          todo={todo}
          checked={todo.completed}
          onChange={this.handleChange}
        />
        <label htmlFor="completed">{todo.content}</label>
        <button>✎</button>
      </li>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "all" };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleCheckChange(todo) {
    this.props.onCheckChange(todo);
  }

  handleFilterChange(filter) {
    this.setState({ filter });
  }

  componentDidUpdate() {
    console.log(this.props.todos);
  }

  render() {
    const filter = this.state.filter;
    const todos = this.props.todos?.filter((todo) => {
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
        <Filter
          activeFilter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ul>
          {todos?.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onTodoCheckChange={this.handleCheckChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class NewTodoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onNewTodo({
      content: this.state.text,
      id: uuidv4(),
      completed: false,
    });
    this.setState({ text: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Enter new todo..."
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

class FilterableTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.props.todos };
    this.addTodo = this.addTodo.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleCheckChange(todo) {
    const id = todo.id;
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id == id) {
          return {
            id: todo.id,
            content: todo.content,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  addTodo(todo) {
    this.setState((state, props) => ({
      todos: [...this.state.todos, todo],
    }));
  }
  render() {
    return (
      <div>
        <NewTodoBar onNewTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onCheckChange={this.handleCheckChange}
        />
      </div>
    );
  }
}

function App() {
  return <FilterableTodoList todos={todos} />;
}

export default App;
