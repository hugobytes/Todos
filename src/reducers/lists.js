import update from 'immutability-helper'
import { CREATE_NEW_LIST, MODIFY_LIST, DELETE_LIST } from 'actions'

const initialState = {}

function listsById(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return update(state, {
        [action.payload.id]: {
          $set: { ...action.payload },
        },
      })
    case MODIFY_LIST:
      return update(state, {
        [action.payload.listId]: {
          last_modified: { $set: action.payload.timestamp },
        },
      })
    case DELETE_LIST:
      return update(state, {
        $apply: function(obj) {
          var copy = Object.assign({}, obj)
          delete copy[action.payload.listId]
          return copy
        },
      })
    default:
      return state
  }
}

export default listsById
