import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFilterChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          id="filterAll"
          name="filter"
          value="all"
          checked={this.props.activeFilter === "all"}
          onChange={this.handleChange}
        />
        <label htmlFor="filterAll">All</label>
        <input
          type="radio"
          id="filterPending"
          name="filter"
          value="pending"
          checked={this.props.activeFilter === "pending"}
          onChange={this.handleChange}
        />
        <label htmlFor="filterPending">Pending</label>
        <input
          type="radio"
          id="filterCompleted"
          name="filter"
          value="completed"
          checked={this.props.activeFilter === "completed"}
          onChange={this.handleChange}
        />
        <label htmlFor="filterCompleted">Completed</label>
      </div>
    );
  }
}
