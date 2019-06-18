import React, { Component } from "react";
import "./index.css";

class TodoItems extends Component {
  state = {};
  render() {
    return (
      <ul className="theList">
        {this.props.items.map(item => (
          <li onClick={() => this.props.onDelete(item.key)} key={item.key}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoItems;
