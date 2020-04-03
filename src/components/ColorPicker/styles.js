import styled from 'styled-components/native'

const Wheel = styled.ScrollView`
  background: white;
  flex-direction: row;
`

const wheelContentStyle = {
  padding: 16,
}

const ColorDot = styled.TouchableOpacity`
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 18px;
  height: 36px;
  justify-content: center;
  margin: 0 8px;
  width: 36px;
`

const SelectedCircle = styled.View`
  background: #fff;
  border-radius: 4px;
  height: 8px;
  width: 8px;
`

export { Wheel, wheelContentStyle, ColorDot, SelectedCircle }
