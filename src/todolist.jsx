import React, { Component } from "react";

class TodoList extends Component {
  componentDidUpdate() {
    console.log("Component did update");
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.onAdd}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.onInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
