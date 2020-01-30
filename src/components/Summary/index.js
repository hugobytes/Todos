import React from 'react'

import { navigate } from 'routes/actions'
import Pie from 'components/Pie'

import { Summary, NameAndInfo, Name, Info } from './styles'

export default ({ id, name, tasks, completed }) => (
  <Summary activeOpacity={0.75} onPress={() => navigate('list', id)}>
    <Pie percent={completed / tasks} />
    <NameAndInfo>
      <Name>{name}</Name>
      <Info>
        {completed}/{tasks} completed
      </Info>
    </NameAndInfo>
  </Summary>
)
