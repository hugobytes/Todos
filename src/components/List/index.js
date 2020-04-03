import React from 'react'
import { connect } from 'react-redux'
import { map, filter, eq } from 'lodash/fp'

import Task from 'components/Task'

import { RootView, Title } from './styles'

function List({ route, tasksById, listsById }) {
  const id = route.params.id
  const tasks = filter(({ listId }) => eq(id)(listId))(tasksById)
  const list = listsById[id]

  return (
    <RootView>
      <Title>{route.params.name}</Title>
      {map(({ id, ...task }) => <Task key={id} id={id} {...task} parentList={list} />)(
        tasks,
      )}
    </RootView>
  )
}

const mapStateToProps = ({ tasksById, listsById }) => ({ tasksById, listsById })

export default connect(mapStateToProps)(List)
