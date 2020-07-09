import React from 'react';
import {connect} from 'react-redux';
import {map} from 'lodash/fp';

import Summary from 'containers/Summary';
import Icon from 'components/Icon';
import {navigate} from 'routes/actions';
import {createNewList} from 'actions';

import {
  RootView,
  Content,
  contentStyle,
  NewListButton,
  NewListText,
} from './styles';

function Home({lists, createNewList}) {
  function handleNewList() {
    const listId = Date.now();
    createNewList({listId});
    navigate('list', {listId});
  }

  return (
    <RootView>
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
