import React from 'react'
import Pie from 'react-native-pie'

export default ({ percentage, color }) => {
  const sections = percentage > 0 ? [{ percentage, color }] : []

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
