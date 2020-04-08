import update from 'immutability-helper'
import { filter, map, flow, eq } from 'lodash/fp'

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

function listsById(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return update(state, {
        [payload.id]: {
          $set: { ...payload },
        },
      })
    case TOGGLE_COMPLETED:
      return update(state, {
        [payload.id]: {
          completed: { $set: !state[payload.id].completed },
        },
      })
    case REMOVE_TASK:
      return update(state, {
        $apply: function(obj) {
          var copy = Object.assign({}, obj)
          delete copy[payload.id]
          return copy
        },
      })
    case DELETE_LIST: {
      const relatedTaskIds = flow(
        filter(({ listId }) => eq(listId)(payload.id)),
        map('id'),
      )(state)

      return update(state, {
        $apply: function(obj) {
          var copy = Object.assign({}, obj)
          for (const id of relatedTaskIds) delete copy[id]
          return copy
        },
      })
    }
    default:
      return state
  }
}

export default listsById
