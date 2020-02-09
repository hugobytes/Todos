import React from 'react'
import { map } from 'lodash/fp'

import Task from 'components/Task'

import { RootView, Title } from './styles'

const items = [
  {
    id: 'h73bd',
    name: 'Potatoes, carrots and something long',
    completed: true,
  },
  {
    id: 'h7iiud',
    name: 'Leeks',
    completed: true,
  },
  {
    id: '38jud',
    name: 'Grapes',
    completed: false,
  },
  {
    id: 'fwCpg6',
    name: 'Sausages',
    completed: false,
  },
]

export default ({ route }) => (
  <RootView>
    <Title>{route.params.name}</Title>
    {map(({ id, ...task }) => <Task key={id} {...task} />)(items)}
  </RootView>
)
