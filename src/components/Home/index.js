import React from 'react'
import { map } from 'lodash/fp'

import Summary from 'components/Summary'

import { RootView, Title } from './styles'

const items = [
  {
    id: '8uwhfbk3',
    name: 'Groceries',
    tasks: 20,
    completed: 17,
  },
  {
    id: 'gt7o903jw',
    name: 'Shopping',
    tasks: 3,
    completed: 2,
  },
]

export default () => (
  <RootView>{map(summary => <Summary key={summary.id} {...summary} />)(items)}</RootView>
)
