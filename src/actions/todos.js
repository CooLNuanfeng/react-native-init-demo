import axios from 'axios';
import Toast from 'react-native-root-toast';
const API_URL = 'https://jsonplaceholder.typicode.com';
let refToast = null;
export const getAllTodosAction = (limit = 5) => dispatch => {
  refToast = Toast.show('loading...');
  return axios.get(`${API_URL}/todos?_limit=${limit}`).then(result => {
    dispatch({
      type: 'GET_TODOS',
      todos: result.data,
    });
  });
};

export const addTodoAction = ({title}) => dispatch => {
  refToast = Toast.show('loading...');
  return axios
    .post(`${API_URL}/todos`, {title, completed: false})
    .then(result => {
      dispatch({
        type: 'ADD_TODO',
        todo: result.data,
      });
    });
};

export const updateTodoAction = id => dispatch => {
  refToast = Toast.show('loading...');
  return axios.put(`${API_URL}/todos/${id}`).then(res => {
    dispatch({
      type: 'UPDATE_TODO',
      id,
    });
  });
};

export const deleteTodoAction = id => dispatch => {
  refToast = Toast.show('loading...');
  return axios.delete(`${API_URL}/todos/${id}`).then(res => {
    return dispatch({type: 'DELETE_TODO', id});
  });
};
