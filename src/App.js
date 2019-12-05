import React from 'react';
import ReactDOM from "react-dom";
import { defaultList } from "./data.js";
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
// import { defaultCipherList } from 'constants';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
  defaultList: defaultList
  };
}

toggleItem = itemId => {
  this.setState({
    defaultList: this.state.defaultList.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};

addItem = itemText => {
  const newItem = {
    name: itemText,
    completed: false,
    id: Date.now()
  };

  this.setState({
    defaultList: [...this.state.defaultList, newItem]
  });
};

  render() {
    return (
      <div className ="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
        defaultList={this.state.defaultList}
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;