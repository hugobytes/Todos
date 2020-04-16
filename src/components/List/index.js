import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { map, filter, eq } from 'lodash/fp'

import { editListName } from 'actions'
import Task from 'components/Task'
import ColorPicker from 'components/ColorPicker'
import TaskAdder from 'components/TaskAdder'
import Icon from 'components/Icon'

import {
  RootView,
  Content,
  contentStyle,
  TitleArea,
  Title,
  AddTaskButton,
  AddTaskText,
} from './styles'

function List({ route, tasksById, listsById, editListName }) {
  const [titleFocused, setTitleFocused] = useState(false)
  const [addingTask, setAddingTask] = useState(false)

  const { id } = route.params
  const tasks = filter(({ listId }) => eq(id)(listId))(tasksById)
  const list = listsById[id]

  const [listName, setListName] = useState(list.name)
  const listNameInput = useRef(null)

  useEffect(() => {
    if (eq('')(list.name)) listNameInput.current.focus()
  }, [])

  function handleChangeText(text) {
    setListName(text)
  }

  function submitListNameChange() {
    editListName({ id, name: listName })
  }

  function handleFocus() {
    setTitleFocused(true)
  }

  function handleBlur() {
    setTitleFocused(false)
  }

  function handleAddTask() {
    setAddingTask(true)
  }

  function finishedAddingTasks() {
    setAddingTask(false)
  }

  return (
    <RootView>
      <TitleArea>
        <Title
          returnKeyType="done"
          ref={listNameInput}
          onChangeText={handleChangeText}
          placeholder="New list"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={submitListNameChange}
          value={listName}
        />
      </TitleArea>

      <Content
        keyboardShouldPersistTaps="always"
        contentContainerStyle={contentStyle}
        showsVerticalScrollIndicator={false}
      >
        {map(({ id, ...task }) => <Task key={id} id={id} {...task} parentList={list} />)(
          tasks,
        )}
      </Content>

      <AddTaskButton color={list.color} activeOpacity={0.75} onPress={handleAddTask}>
        <Icon name="plus" fill="#fff" height={16} width={16} viewBox="0 0 24 24" />
        <AddTaskText>Add a task</AddTaskText>
      </AddTaskButton>

      {titleFocused && <ColorPicker id={id} />}
      {addingTask && (
        <TaskAdder listId={id} color={list.color} finished={finishedAddingTasks} />
      )}
    </RootView>
  )
}

const mapStateToProps = ({ tasksById, listsById }) => ({ tasksById, listsById })
const mapDispatchToProps = dispatch => ({
  editListName: ({ id, name }) => dispatch(editListName({ id, name })),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
