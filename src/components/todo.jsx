import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
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
