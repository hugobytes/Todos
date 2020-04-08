import styled from 'styled-components/native'

import { colors } from 'theme'

const RootView = styled.KeyboardAvoidingView``

const Wheel = styled.ScrollView`
  background: ${colors.background};
  bottom: 0;
  flex-direction: row;
  left: 0;
  position: absolute;
  right: 0;
`

const wheelContentStyle = {
  padding: 16,
}

const ColorDot = styled.TouchableOpacity`
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  margin: 0 8px;
  width: 40px;
`

const SelectedCircle = styled.View`
  background: ${colors.background};
  border-radius: 6px;
  height: 12px;
  width: 12px;
`

export { RootView, Wheel, wheelContentStyle, ColorDot, SelectedCircle }
