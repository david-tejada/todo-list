import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class NewTodo extends React.Component {
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
