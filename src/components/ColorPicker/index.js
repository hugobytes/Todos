import React from 'react'
import { map, eq } from 'lodash/fp'
import { connect } from 'react-redux'

import { changeListColor } from 'actions'

import { Wheel, wheelContentStyle, ColorDot, SelectedCircle } from './styles'

const colors = ['#AB05F2', '#7D07F2', '#5207F2', '#23D9B7', '#D7F205']

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
  <Wheel
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={wheelContentStyle}
  >
    {map(color => <Color key={color} color={color} id={id} />)(colors)}
  </Wheel>
)
