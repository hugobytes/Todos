import styled from 'styled-components/native'

const RootView = styled.KeyboardAvoidingView``

const Wheel = styled.ScrollView`
  background: white;
  bottom: 0;
  flex-direction: row;
  position: absolute;
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
  background: #fff;
  border-radius: 6px;
  height: 12px;
  width: 12px;
`

export { RootView, Wheel, wheelContentStyle, ColorDot, SelectedCircle }
