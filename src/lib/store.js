import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {lists} from './reducers';

const reducer = combineReducers({lists});
const store = createStore(reducer, applyMiddleware(logger));

export default store;