import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionsTypes';

const INITAL_STATE = [{
         id: 0,
         text: 'Walk the Dog',
     },
     {
         id:1,
         text: 'learn Redux',
     }];

const TodoReducer = (state=INITAL_STATE, action) => {
  switch (action.type){
    case ADD_TODO:
      return [...state,{
        id: action.id,
        text: action.text,
        completed: false
      }];
    case TOGGLE_TODO:
      return state.map(todo =>
          (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
      );
    case REMOVE_TODO:
      const index = parseInt(action.id);
      return state.filter(todo => todo.id !== index);
    default:
      return state
  }
}

export default TodoReducer;