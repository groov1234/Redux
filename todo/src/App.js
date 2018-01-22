import React, { Component } from 'react';
import './App.css';
// import List and Add components change classNames to reflect app
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="Todo">
        <header className="Todo-header">
          <h1 className="Todo-title">Todo's with Redux</h1>
        </header>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
export default App;
