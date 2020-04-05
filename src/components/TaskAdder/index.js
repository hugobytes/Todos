import React from 'react'
import { connect } from 'react-redux'
import { v4 as uniqueId } from 'uuid'

import Icon from 'components/Icon'
import { addTask } from 'actions'

import { RootView, AddTaskButton, AddTaskText } from './styles'

function TaskAdder({ addTask, color }) {
  function handleAddTask() {
    const id = uniqueId()
    // addTask(id)
    console.log('New task!')
  }

  return (
    <RootView>
      <AddTaskButton color={color} activeOpacity={0.75} onPress={handleAddTask}>
        <Icon name="plus" fill="#fff" height={16} width={16} viewBox="0 0 24 24" />
        <AddTaskText>Add a task</AddTaskText>
      </AddTaskButton>
    </RootView>
  )
}

const mapStateToProps = ({ listsById }) => ({ listsById })
const mapDispatchToProps = dispatch => ({
  addTask: id => dispatch(addTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskAdder)
