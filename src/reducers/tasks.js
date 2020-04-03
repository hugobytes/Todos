import update from 'immutability-helper'
import { ADD_TASK, TOGGLE_COMPLETED, REMOVE_TASK } from 'actions'

const initialState = {}

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
        [action.payload.taskId]: {
          completed: { $set: !state[action.payload.taskId].completed },
        },
      })
    case REMOVE_TASK:
      return update(state, {
        $apply: function(obj) {
          var copy = Object.assign({}, obj)
          delete copy[action.payload.taskId]
          return copy
        },
      })
    default:
      return state
  }
}

export default listsById
