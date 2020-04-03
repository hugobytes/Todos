import React from 'react'
import { connect } from 'react-redux'
import { map, uniqueId } from 'lodash/fp'

import Summary from 'components/Summary'
import Icon from 'components/Icon'
import { navigate } from 'routes/actions'
import { createNewList } from 'actions'

import { RootView, Content, contentStyle, NewListButton, NewListText } from './styles'

function Home({ listsById, createNewList }) {
  function handleNewList() {
    const id = uniqueId()
    createNewList(id)
    navigate('list', { id })
  }

  return (
    <RootView>
      <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
        {map(summary => <Summary key={summary.id} {...summary} />)(listsById)}
      </Content>
      <NewListButton activeOpacity={0.75} onPress={handleNewList}>
        <Icon name="plus" fill="#fff" height={16} width={16} viewBox="0 0 24 24" />
        <NewListText>New list</NewListText>
      </NewListButton>
    </RootView>
  )
}

const mapStateToProps = ({ listsById }) => ({ listsById })
const mapDispatchToProps = dispatch => ({
  createNewList: id => dispatch(createNewList(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
