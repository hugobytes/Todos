import React from 'react'
import { map } from 'lodash/fp'

import Icon from 'components/Icon'

import { RootView } from './styles'

export default ({ route }) => (
  <RootView>
    <Icon name="menu" fill="#000" />
  </RootView>
)
