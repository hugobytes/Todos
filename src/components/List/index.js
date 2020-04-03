import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { map, filter, eq } from 'lodash/fp'

import { editListName } from 'actions'
import Task from 'components/Task'
import ColorPicker from 'components/ColorPicker'

import { RootView, Title } from './styles'

function List({ route, tasksById, listsById, editListName }) {
  const { id } = route.params
  const tasks = filter(({ listId }) => eq(id)(listId))(tasksById)
  const list = listsById[id]
  const titleInput = useRef(null)

  useEffect(() => {
    if (eq('')(list.name)) titleInput.current.focus()
  }, [])

  function handleChangeText(text) {
    editListName(id, text)
  }

  return (
    <RootView>
      <Title
        ref={titleInput}
        onChangeText={handleChangeText}
        placeholder="Name your list"
      >
        {list.name}
      </Title>
      {map(({ id, ...task }) => <Task key={id} id={id} {...task} parentList={list} />)(
        tasks,
      )}
      <ColorPicker id={id} />
    </RootView>
  )
}

const mapStateToProps = ({ tasksById, listsById }) => ({ tasksById, listsById })
const mapDispatchToProps = dispatch => ({
  editListName: (id, name) => dispatch(editListName(id, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
