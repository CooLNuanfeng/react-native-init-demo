import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import todos from '../reducer/todos';

const rootReducers = combineReducers({
  todos,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
