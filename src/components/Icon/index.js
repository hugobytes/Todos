import React from 'react'
import { Svg } from 'react-native-svg'
import { icons } from './svgs'

const Icon = ({
  fill,
  fillRule,
  height,
  name,
  stroke,
  strokeWidth,
  style,
  width,
  viewBox,
}) => {
  const selectedIcon = icons[name]

  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox || `0 0 ${width} ${height}`}
      style={style}
    >
      {React.cloneElement(selectedIcon, {
        fill,
        fillRule,
        stroke,
        strokeWidth,
      })}
    </Svg>
  )
}

Icon.defaultProps = {
  fill: '#747483',
  fillRule: 'evenodd',
  height: 32,
  width: 32,
}

export default Icon
