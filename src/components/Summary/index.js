import React from 'react'
import { calcPercentage } from 'utils'

import { navigate } from 'routes/actions'
import Pie from 'components/Pie'

import { Summary, NameAndInfo, Name, Info } from './styles'

const getInfo = ({ percentage }) => {
  if (percentage === '0') {
    return 'Not started yet'
  }

  return `${percentage}% Completed`
}

export default ({ id, name, tasks, completed }) => {
  const percentage = calcPercentage(completed, tasks)
  const info = getInfo({ percentage })

  return (
    <Summary activeOpacity={0.75} onPress={() => navigate('list', { id, name })}>
      <Pie percentage={percentage} />
      <NameAndInfo>
        <Name>{name}</Name>
        <Info>{info}</Info>
      </NameAndInfo>
    </Summary>
  )
}
