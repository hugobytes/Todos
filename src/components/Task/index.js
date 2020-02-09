import React from 'react'

import Icon from 'components/Icon'

import { Task, Name, Checkbox } from './styles'

export default ({ id, name, completed }) => (
  <Task activeOpacity={0.75} onPress={() => {}}>
    <Checkbox
      completed={completed}
      hitSlop={{ left: 16, top: 16, right: 16, bottom: 16 }}
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
    <Name>{name}</Name>
  </Task>
)
