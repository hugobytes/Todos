import React from 'react'
import { connect } from 'react-redux'

import Icon from 'components/Icon'

import { Task, Name, Checkbox } from './styles'

function TaskComponent({ id, text, completed, parentList }) {
  const { color } = parentList

  return (
    <Task activeOpacity={0.75} onPress={() => {}}>
      <Checkbox
        completed={completed}
        hitSlop={{ left: 16, top: 16, right: 16, bottom: 16 }}
        color={color}
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
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
