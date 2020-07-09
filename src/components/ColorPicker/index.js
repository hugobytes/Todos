import React from 'react';
import {map, eq} from 'lodash/fp';
import {connect} from 'react-redux';

import {changeListColor} from 'lib/actions';

import {
  RootView,
  Wheel,
  wheelContentStyle,
  ColorDot,
  SelectedCircle,
} from './styles';

const colors = [
  '#ec0c9e',
  '#ab05f2',
  '#7d07f2',
  '#5207f2',
  '#23d9b7',
  '#4c4c4c',
];

const mapDispatchToProps = (dispatch) => ({
  changeListColor: ({listId, color}) =>
    dispatch(changeListColor({listId, color})),
});

const mapStateToProps = ({lists}) => ({lists});

const Color = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({color, listId, changeListColor, lists}) => {
  const selected = eq(color)(lists[listId].color);

  function handlePress() {
    changeListColor({listId, color});
  }

  return (
    <ColorDot color={color} onPress={handlePress} activeOpacity={0.75}>
      {selected && <SelectedCircle />}
    </ColorDot>
  );
});

export default ({listId}) => (
  <RootView>
    <Wheel
      keyboardShouldPersistTaps="always"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={wheelContentStyle}>
      {map((color) => <Color key={color} color={color} listId={listId} />)(
        colors,
      )}
    </Wheel>
  </RootView>
);
