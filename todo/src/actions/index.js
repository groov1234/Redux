export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
// Create Redux addTodo
let id = 0;
export const addTodo = value => {
  return {
    type: ADD_TODO,
    id: id++,
    value,
    completed: false,
  };
};
// Create Redux removeTodo
export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
// Create Redux toggleTodo
export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
