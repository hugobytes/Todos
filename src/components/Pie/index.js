import React from 'react'
import Pie from 'react-native-pie'
import { colors } from 'theme'

export default ({ percentage, color }) => {
  const sections = percentage > 0 ? [{ percentage, color }] : []

  return (
    <Pie
      radius={18}
      innerRadius={12}
      backgroundColor={colors.content_deep}
      sections={sections}
    />
  )
}
