import update from 'immutability-helper'
import { ADD_TASK, TOGGLE_COMPLETED, REMOVE_TASK, DELETE_LIST } from 'actions'

const initialState = {
  'example-first-task': {
    id: 'example-first-task',
    listId: 'example-list',
    text: 'apples',
    completed: true,
  },
  'example-second-task': {
    id: 'example-second-task',
    listId: 'example-list',
    text: 'bananas',
    completed: false,
  },
  'example-third-task': {
    id: 'example-third-task',
    listId: 'example-list',
    text:
      'apples newest f we’d we feed and then we’d feed them hoes ... ... down at mud muddier Ew',
    completed: false,
  },
}

function listsById(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return update(state, {
        [action.payload.id]: {
          $set: { ...action.payload },
        },
      })
    case TOGGLE_COMPLETED:
      return update(state, {
        [action.payload.id]: {
          completed: { $set: !state[action.payload.id].completed },
        },
      })
    case REMOVE_TASK:
      return update(state, {
        $apply: function(obj) {
          var copy = Object.assign({}, obj)
          delete copy[action.payload.id]
          return copy
        },
      })
    case DELETE_LIST:
      return state // todo: remove all tasks with listId
    default:
      return state
  }
}

export default listsById
