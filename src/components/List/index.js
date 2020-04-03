import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { map, filter, eq } from 'lodash/fp'

import Task from 'components/Task'

import { RootView, Title } from './styles'

function List({ route, tasksById, listsById }) {
  const { id } = route.params
  const tasks = filter(({ listId }) => eq(id)(listId))(tasksById)
  const list = listsById[id]
  const titleInput = useRef(null)

  useEffect(() => {
    if (eq('')(list.name)) titleInput.current.focus()
  }, [])

  return (
    <RootView>
      <Title ref={titleInput}>{list.name}</Title>
      {map(({ id, ...task }) => <Task key={id} id={id} {...task} parentList={list} />)(
        tasks,
      )}
    </RootView>
  )
}

const mapStateToProps = ({ tasksById, listsById }) => ({ tasksById, listsById })

export default connect(mapStateToProps)(List)
