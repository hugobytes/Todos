import styled from 'styled-components/native'
import { colors } from 'theme'

const Summary = styled.TouchableOpacity`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  margin: 8px 16px;
  padding: 16px;
`

const NameAndInfo = styled.View`
  justify-content: center;
  margin-left: 16px;
`

const Name = styled.Text`
  color: ${colors.text};
  font-family: 'RobotoMono-Medium';
  font-size: 18px;
`

const Info = styled.Text`
  color: ${colors.text};
  font-family: 'RobotoMono-Regular';
  font-size: 12px;
`

export { Summary, NameAndInfo, Name, Info }
