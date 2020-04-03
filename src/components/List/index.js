import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { map, filter, eq } from 'lodash/fp'

import { editListName } from 'actions'
import Task from 'components/Task'
import ColorPicker from 'components/ColorPicker'

import { RootView, contentStyle, SpaceTaker, Title } from './styles'

function List({ route, tasksById, listsById, editListName }) {
  const { id } = route.params
  const [titleFocused, setTitleFocused] = useState(false)
  const tasks = filter(({ listId }) => eq(id)(listId))(tasksById)
  const list = listsById[id]
  const titleInput = useRef(null)

  useEffect(() => {
    if (eq('')(list.name)) titleInput.current.focus()
  }, [])

  function handleChangeText(text) {
    editListName(id, text)
  }

  function handleFocus() {
    setTitleFocused(true)
  }

  function handleBlur() {
    setTitleFocused(false)
  }

  return (
    <RootView keyboardShouldPersistTaps="always" contentContainerStyle={contentStyle}>
      <Title
        returnKeyType="done"
        ref={titleInput}
        onChangeText={handleChangeText}
        placeholder="Name your list"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {list.name}
      </Title>
      {map(({ id, ...task }) => <Task key={id} id={id} {...task} parentList={list} />)(
        tasks,
      )}
      <SpaceTaker />
      {titleFocused && <ColorPicker id={id} />}
    </RootView>
  )
}

const mapStateToProps = ({ tasksById, listsById }) => ({ tasksById, listsById })
const mapDispatchToProps = dispatch => ({
  editListName: (id, name) => dispatch(editListName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
