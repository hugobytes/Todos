import React from 'react'
import { connect } from 'react-redux'

import Icon from 'components/Icon'
import { toggleCompleted, removeTask } from 'actions'

import { RootView, DeleteButton, Task, NameWrapper, Name, Checkbox } from './styles'

function TaskComponent({ id, text, completed, parentList, toggleCompleted, removeTask }) {
  const { color } = parentList

  const tapCheckbox = () => toggleCompleted(id)
  const handleDelete = () => removeTask(id)

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
          <Icon
            activeOpacity={0.75}
            name="tick"
            fill="#fff"
            height={12}
            width={12}
            viewBox="0 0 24 24"
          />
        </Checkbox>
        <NameWrapper completed={completed}>
          <Name
            completed={completed}
            textAlignVertical="top"
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
          >
            {text}
          </Name>
        </NameWrapper>
      </Task>
      <DeleteButton activeOpacity={0.75} onPress={handleDelete}>
        <Icon name="trash" fill="#fff" viewBox="0 0 32 32" height={24} width={24} />
      </DeleteButton>
    </RootView>
  )
}

const mapStateToProps = ({ listsById }) => ({ listsById })
const mapDispatchToProps = dispatch => ({
  toggleCompleted: id => dispatch(toggleCompleted(id)),
  removeTask: id => dispatch(removeTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
