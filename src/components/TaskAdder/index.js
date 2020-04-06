import React, { useRef, useState, useEffect } from 'react'
import { Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { size } from 'lodash/fp'

import Icon from 'components/Icon'
import { addTask } from 'actions'

import { RootView, NewTask, Checkbox, NewTaskInput } from './styles'

function TaskAdder({ addTask, color, finished, listId }) {
  const [text, setText] = useState('')
  const newTaskInput = useRef(null)

  const isEmpty = !size(text)
  const handleTextChange = text => setText(text)

  function handleAddTask() {
    if (isEmpty) {
      Keyboard.dismiss()
      finished()
    } else {
      addTask({
        text,
        listId,
      })
      setText('')
    }
  }

  useEffect(() => {
    newTaskInput.current.focus()
  }, [])

  return (
    <RootView behavior="position" keyboardVerticalOffset={40}>
      <NewTask>
        <Checkbox color={color}>
          <Icon name="tick" fill="#fff" height={12} width={12} viewBox="0 0 24 24" />
        </Checkbox>
        <NewTaskInput
          onBlur={finished}
          ref={newTaskInput}
          placeholder="What it do babeee"
          returnKeyType={'next'}
          onChangeText={handleTextChange}
          value={text}
          onSubmitEditing={handleAddTask}
          blurOnSubmit={false}
        />
      </NewTask>
    </RootView>
  )
}

const mapStateToProps = ({ listsById }) => ({ listsById })
const mapDispatchToProps = dispatch => ({
  addTask: id => dispatch(addTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskAdder)
