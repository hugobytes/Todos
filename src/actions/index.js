import { uniqueId } from 'lodash/fp'

const CREATE_NEW_LIST = 'CREATE_NEW_LIST'
const EDIT_LIST_NAME = 'EDIT_LIST_NAME'
const CHANGE_LIST_COLOR = 'CHANGE_LIST_COLOR'
const MODIFY_LIST = 'MODIFY_LIST'
const DELETE_LIST = 'DELETE_LIST'
const ADD_TASK = 'ADD_TASK'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const REMOVE_TASK = 'REMOVE_TASK'

function createNewList(id) {
  const now = Date.now()

  return {
    type: CREATE_NEW_LIST,
    payload: {
      id,
      name: '',
      color: 'blue',
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

function editListName(id, name) {
  return {
    type: EDIT_LIST_NAME,
    payload: {
      id,
      name,
    },
  }
}

function changeListColor(id, color) {
  return {
    type: CHANGE_LIST_COLOR,
    payload: {
      id,
      color,
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
  EDIT_LIST_NAME,
  editListName,
  CHANGE_LIST_COLOR,
  changeListColor,
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
