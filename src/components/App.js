import React, { Component } from "react";
import { TodoItems } from "./Todoitems";
import { Additem } from "./AddItem";
import "../style/App.css";
import "../style/Main.css";
export default class App extends Component {
  state = {
    items: [
      { id: 1, name: "omar", age: 21 },
      { id: 2, name: "omar", age: 22 },
      { id: 3, name: "omar", age: 23 },
    ],
  };
  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items });
  };
  additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <Additem additem={this.additem} />
      </div>
    );
  }
}
