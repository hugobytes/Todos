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

function modifyList(listId) {
  return {
    type: MODIFY_LIST,
    payload: {
      listId,
      timestamp: Date.now(),
    },
  }
}

function deleteList(listId) {
  return {
    type: DELETE_LIST,
    payload: {
      listId,
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

function toggleCompleted(taskId) {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      taskId,
    },
  }
}

function removeTask(taskId) {
  return {
    type: REMOVE_TASK,
    payload: {
      taskId,
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
