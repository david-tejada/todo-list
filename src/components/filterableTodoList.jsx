import React from "react";
import NewTodo from "./newTodo";
import TodoList from "./todoList";

export default class FilterableTodoList extends React.Component {
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
        <NewTodo onNewTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onCheckChange={this.handleCheckChange}
        />
      </div>
    );
  }
}
