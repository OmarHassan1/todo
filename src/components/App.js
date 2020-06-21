import React, { Component } from "react";
import { TodoItems } from "./Todoitems";
import "../style/App.css";
export default class App extends Component {
  state = {
    items: [
      { id: 1, name: "omar", age: 21 },
      { id: 2, name: "omar", age: 22 },
      { id: 3, name: "omar", age: 23 },
    ],
  };

  render() {
    return (
      <div className="App">
        App
        <TodoItems />
      </div>
    );
  }
}
