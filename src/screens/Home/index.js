import React from 'react';
import {connect} from 'react-redux';
import {map, size} from 'lodash/fp';

import Summary from 'components/Summary';
import Icon from 'components/Icon';
import {navigate} from 'lib/navigation';
import {createNewList} from 'lib/actions';

import {
  RootView,
  Content,
  contentStyle,
  NewListButton,
  NewListText,
  EmptyImage,
} from './styles';

function Home({lists, createNewList}) {
  function handleNewList() {
    const listId = Date.now();
    createNewList({listId});
    navigate('list', {listId});
  }

  return (
    <RootView>
      <EmptyImage source={require('assets/empty.png')} />
      {!size(lists) ? (
        <EmptyImage source={require('assets/empty.png')} />
      ) : null}
      <Content
        contentContainerStyle={contentStyle}
        showsVerticalScrollIndicator={false}>
        {map((summary) => <Summary key={summary.listId} {...summary} />)(lists)}
      </Content>
      <NewListButton activeOpacity={0.75} onPress={handleNewList}>
        <Icon
          name="plus"
          fill="#fff"
          height={16}
          width={16}
          viewBox="0 0 24 24"
        />
        <NewListText>New list</NewListText>
      </NewListButton>
    </RootView>
  );
}

const mapStateToProps = ({lists}) => ({lists});
const mapDispatchToProps = (dispatch) => ({
  createNewList: (payload) => dispatch(createNewList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
