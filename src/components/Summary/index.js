import React from 'react'
import { size, filter, eq } from 'lodash/fp'
import { connect } from 'react-redux'

import { deleteList } from 'actions'
import { calcPercentage } from 'utils'
import { navigate } from 'routes/actions'
import Pie from 'components/Pie'
import Icon from 'components/Icon'

import {
  RootView,
  Summary,
  DeleteButton,
  NameAndInfo,
  Name,
  Untitled,
  Info,
} from './styles'

const getInfo = ({ completed, tasks }) => {
  if (eq(0)(tasks)) {
    return 'Empty'
  }

  if (eq(0)(completed)) {
    return eq(1)(tasks) ? '1 task' : `${tasks} tasks`
  }

  if (eq(tasks)(completed)) {
    return `Completed \ud83c\udf89`
  }

  return `${completed}/${tasks} completed`
}

function SummaryComponent({ listId, name, color, lists, deleteList }) {
  const listTasks = lists[listId].tasks
  const completed = filter('completed')(listTasks)

  const percentage = calcPercentage(size(completed), size(listTasks))
  const info = getInfo({ completed: size(completed), tasks: size(listTasks) })

  const openList = () => navigate('list', { listId })
  const handleDelete = () => deleteList({ listId })

  return (
    <RootView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={64}
      bounces={false}
    >
      <Summary activeOpacity={0.75} onPress={openList}>
        <Pie percentage={percentage} color={color} />
        <NameAndInfo>
          {eq('')(name) ? <Untitled>Untitled</Untitled> : <Name>{name}</Name>}
          <Info>{info}</Info>
        </NameAndInfo>
      </Summary>
      <DeleteButton activeOpacity={0.75} onPress={handleDelete}>
        <Icon name="trash" fill="#fff7f7" viewBox="0 0 32 32" height={24} width={24} />
      </DeleteButton>
    </RootView>
  )
}

const mapStateToProps = ({ lists }) => ({ lists })

const mapDispatchToProps = dispatch => ({
  deleteList: payload => dispatch(deleteList(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SummaryComponent)
