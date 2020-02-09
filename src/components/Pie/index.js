import React from 'react'
import Pie from 'react-native-pie'

import { Squircle } from './styles'

export default ({ percentage }) => {
  const sections = percentage > 0 ? [{ percentage, color: '#4e3ec8' }] : []

  return (
    <Pie
      radius={20}
      innerRadius={14}
      backgroundColor="#e6e9ef"
      sections={sections}
      strokeCap={'round'}
    />
  )
}
