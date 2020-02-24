const initState = {
  todos: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: [...action.todos],
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.id) {
            item.completed = !item.completed;
          }
          return item;
        }),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};
