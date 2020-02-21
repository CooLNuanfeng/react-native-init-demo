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
    default:
      return state;
  }
};
