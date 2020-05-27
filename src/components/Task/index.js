import React from 'react'
import { connect } from 'react-redux'

import Icon from 'components/Icon'
import { toggleCompleted, removeTask } from 'actions'

import { RootView, DeleteButton, Task, NameWrapper, Name, Checkbox } from './styles'

function TaskComponent({ taskId, text, completed, parentList, toggleCompleted, removeTask }) {
  const { color, listId } = parentList

  const tapCheckbox = () => toggleCompleted({ taskId, listId })
  const handleDelete = () => removeTask({ taskId, listId })

  return (
    <RootView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={64}
      bounces={false}
    >
      <Task>
        <Checkbox
          activeOpacity={0.75}
          completed={completed}
          hitSlop={{ left: 16, top: 16, right: 16, bottom: 16 }}
          color={color}
          onPress={tapCheckbox}
        >
          <Icon name="tick" fill="#fff" height={12} width={12} viewBox="0 0 24 24" />
        </Checkbox>
        <NameWrapper completed={completed} activeOpacity={0.75}>
          <Name
            completed={completed}
            textAlignVertical="top"
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
            editable={false}
          >
            {text}
          </Name>
        </NameWrapper>
      </Task>
      <DeleteButton activeOpacity={0.75} onPress={handleDelete}>
        <Icon name="trash" fill="#fff7f7" viewBox="0 0 32 32" height={24} width={24} />
      </DeleteButton>
    </RootView>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCompleted: payload => dispatch(toggleCompleted(payload)),
  removeTask: payload => dispatch(removeTask(payload)),
})

export default connect(null, mapDispatchToProps)(TaskComponent)
