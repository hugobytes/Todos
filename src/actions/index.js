import { uniqueId } from 'lodash/fp'

const CREATE_NEW_LIST = 'CREATE_NEW_LIST'
const MODIFY_LIST = 'MODIFY_LIST'
const DELETE_LIST = 'DELETE_LIST'
const ADD_TASK = 'ADD_TASK'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const REMOVE_TASK = 'REMOVE_TASK'

function createNewList(name, color) {
  const now = Date.now()

  return {
    type: CREATE_NEW_LIST,
    payload: {
      id: uniqueId(),
      name,
      color,
      created: now,
      last_modified: now,
    },
  }
}

function modifyList(id) {
  return {
    type: MODIFY_LIST,
    payload: {
      id,
      timestamp: Date.now(),
    },
  }
}

function deleteList(id) {
  return {
    type: DELETE_LIST,
    payload: {
      id,
    },
  }
}

function addTask(text, listId) {
  return {
    type: ADD_TASK,
    payload: {
      id: uniqueId(),
      listId,
      text,
      completed: false,
    },
  }
}

function toggleCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id,
    },
  }
}

function removeTask(id) {
  return {
    type: REMOVE_TASK,
    payload: {
      id,
    },
  }
}

export {
  CREATE_NEW_LIST,
  createNewList,
  MODIFY_LIST,
  modifyList,
  ADD_TASK,
  addTask,
  DELETE_LIST,
  deleteList,
  TOGGLE_COMPLETED,
  toggleCompleted,
  REMOVE_TASK,
  removeTask,
}
