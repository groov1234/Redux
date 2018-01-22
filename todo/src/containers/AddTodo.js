// import addTodo from actions
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
// Builds input box + submit button
const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="Todo-input">
      <form className="Todo-input"
        onSubmit={todo => {
          todo.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        <input className="Todo-input" placeholder="Add a Todo"
          ref={node => {
            input = node;
          }}
        /> 
        <button className="Submit-todo" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
