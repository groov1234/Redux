import React from 'react';

const Todo = props => (
  // add onClick for completion + Remove button
  <div className="Todolist">
    <div
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
      }}
    >
      <strong>{props.value}</strong>
      <br />
      <span>{props.completed ? 'Completed' : 'Not Completed'}</span>
    </div>
    <div className="Remove-todo">
      <button onClick={props.remove}>Remove</button>
    </div>
  </div>
);

export default Todo;
