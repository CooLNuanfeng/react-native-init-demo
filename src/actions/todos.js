import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getAllTodos = (limit = 5) => dispatch => {
  return axios.get(`${API_URL}/todos?_limit=${limit}`).then(result => {
    dispatch({
      type: 'GET_TODOS',
      todos: result.data,
    });
  });
};

export const addTodoAction = ({title}) => dispatch => {
  return axios
    .post(`${API_URL}/todos`, {title, completed: false})
    .then(result => {
      console.log(result.data);

      dispatch({
        type: 'ADD_TODO',
        todo: result.data,
      });
    });
};
