const CREATE_NEW_LIST = 'CREATE_NEW_LIST'
const EDIT_LIST_NAME = 'EDIT_LIST_NAME'
const CHANGE_LIST_COLOR = 'CHANGE_LIST_COLOR'
const MODIFY_LIST = 'MODIFY_LIST'
const DELETE_LIST = 'DELETE_LIST'
const ADD_TASK = 'ADD_TASK'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const REMOVE_TASK = 'REMOVE_TASK'

function createNewList({ listId }) {
  const now = Date.now()

  return {
    type: CREATE_NEW_LIST,
    payload: {
      listId,
      name: '',
      color: '#ec0c9e',
      created: now,
      last_modified: now,
      tasks: {},
    },
  }
}

function modifyList({ listId }) {
  return {
    type: MODIFY_LIST,
    payload: {
      listId,
      timestamp: Date.now(),
    },
  }
}

function editListName({ listId, name }) {
  return {
    type: EDIT_LIST_NAME,
    payload: {
      listId,
      name,
    },
  }
}

function changeListColor({ listId, color }) {
  return {
    type: CHANGE_LIST_COLOR,
    payload: {
      listId,
      color,
    },
  }
}

function deleteList({ listId }) {
  return {
    type: DELETE_LIST,
    payload: {
      listId,
    },
  }
}

function addTask({ text, listId }) {
  return {
    type: ADD_TASK,
    payload: {
      taskId: Date.now(),
      listId,
      text,
      completed: false,
    },
  }
}

function toggleCompleted({ taskId, listId }) {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      taskId,
      listId
    },
  }
}

function removeTask({ taskId, listId }) {
  return {
    type: REMOVE_TASK,
    payload: {
      taskId,
      listId
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
