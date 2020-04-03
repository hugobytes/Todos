import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

import listsById from './listsById'
import tasksById from './tasksById'

const reducer = combineReducers({ listsById, tasksById })
const store = createStore(reducer, applyMiddleware(logger))

export default store
