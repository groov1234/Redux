// import actions index for add, complete, and remove
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions';
import { bindActionCreators } from 'redux';
// import Todo and create TodoList add key, onClick, remove
import Todo from './Todo';

const TodoList = props => (
  <div className="Todos">
    {props.todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => props.toggleTodo(todo.id)}
        remove={() => props.removeTodo(todo.id)}
      />
    ))}
  </div>
);
// add state to todo props
const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};
// bind state to props(dispatch)
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo, toggleTodo, removeTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
