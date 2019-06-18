import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import TodoList from "./todolist";
import TodoItems from "./todoitems";

class App extends Component {
  state = {};

  inputElement = React.createRef();

  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
    console.log("handling Input from imbox");
  };

  handleAdd = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log("New item Added: ", newItem.text);
      const items = [...this.state.items, newItem];

      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };

  handleDelete = itemKey => {
    const items = this.state.items.filter(item => item.key !== itemKey);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList
            inputElement={this.inputElement}
            onInput={this.handleInput}
            currentItem={this.state.currentItem}
            onAdd={this.handleAdd}
          />
          <TodoItems items={this.state.items} onDelete={this.handleDelete} />
        </header>
      </div>
    );
  }
}

export default App;
