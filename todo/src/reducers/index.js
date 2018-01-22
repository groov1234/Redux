import { combineReducers } from 'redux';
import TodoReducer from './todos';
// create combined Reducers
const rootReducer = combineReducers({
  todos: TodoReducer,
});

export default rootReducer;
