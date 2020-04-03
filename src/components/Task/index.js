import React from 'react'
import { connect } from 'react-redux'

import Icon from 'components/Icon'
import { toggleCompleted } from 'actions'

import { Task, Name, Checkbox } from './styles'

function TaskComponent({ id, text, completed, parentList, toggleCompleted }) {
  const { color } = parentList

  const tapCheckbox = () => toggleCompleted(id)

  return (
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
      <Name>{text}</Name>
    </Task>
  )
}

const mapStateToProps = ({ listsById }) => ({ listsById })
const mapDispatchToProps = dispatch => ({
  toggleCompleted: id => dispatch(toggleCompleted(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
