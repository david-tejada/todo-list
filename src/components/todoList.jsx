import React from "react";
import Todo from "./todo";
import Filter from "./filter";

export default class TodoList extends React.Component {
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
