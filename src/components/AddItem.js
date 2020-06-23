import React, { Component } from "react";

export class Additem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.additem(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };
  render() {
    return (
      <div className="Additem">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="number"
            placeholder="Enter Age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
