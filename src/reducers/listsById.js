import update from 'immutability-helper'
import {
  CREATE_NEW_LIST,
  EDIT_LIST_NAME,
  CHANGE_LIST_COLOR,
  MODIFY_LIST,
  DELETE_LIST,
} from 'actions'

const initialState = {
  'example-list': {
    id: 'example-list',
    name: 'Groceries from Tesco',
    color: 'green',
    created: 123,
    last_modified: 123,
  },
}

function quickTasksApp(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_NEW_LIST:
      return update(state, {
        [payload.id]: {
          $set: { ...payload },
        },
      })
    case EDIT_LIST_NAME:
      return update(state, {
        [payload.id]: {
          name: { $set: payload.name },
        },
      })
    case CHANGE_LIST_COLOR:
      return update(state, {
        [payload.id]: {
          color: { $set: payload.color },
        },
      })
    case MODIFY_LIST:
      return update(state, {
        [payload.id]: {
          last_modified: { $set: payload.timestamp },
        },
      })
    case DELETE_LIST:
      return update(state, {
        $apply: function(obj) {
          var copy = Object.assign({}, obj)
          delete copy[payload.id]
          return copy
        },
      })
    default:
      return state
  }
}

export default quickTasksApp
