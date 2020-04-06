import React from 'react'
import { map, eq } from 'lodash/fp'
import { connect } from 'react-redux'

import { changeListColor } from 'actions'

import { RootView, Wheel, wheelContentStyle, ColorDot, SelectedCircle } from './styles'

const colors = [
  '#ec0c9e',
  '#ab05f2',
  '#7d07f2',
  '#5207f2',
  '#23d9b7',
  // '#8ff76c',
  '#4c4c4c',
]

const mapDispatchToProps = dispatch => ({
  changeListColor: (id, name) => dispatch(changeListColor(id, name)),
})

const mapStateToProps = ({ listsById }) => ({ listsById })

const Color = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ color, id, changeListColor, listsById }) => {
  const selected = eq(color)(listsById[id].color)

  function handlePress() {
    changeListColor(id, color)
  }

  return (
    <ColorDot color={color} onPress={handlePress} activeOpacity={0.75}>
      {selected && <SelectedCircle />}
    </ColorDot>
  )
})

export default ({ id }) => (
  <RootView behavior="position" keyboardVerticalOffset={40}>
    <Wheel
      keyboardShouldPersistTaps="always"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={wheelContentStyle}
    >
      {map(color => <Color key={color} color={color} id={id} />)(colors)}
    </Wheel>
  </RootView>
)
