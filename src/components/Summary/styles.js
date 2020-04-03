import styled from 'styled-components/native'
import { colors } from 'theme'

const Summary = styled.TouchableOpacity`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  margin: 8px 0;
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

const Untitled = styled(Name)`
  opacity: 0.5;
`

const Info = styled.Text`
  color: ${colors.text};
  font-family: 'RobotoMono-Regular';
  font-size: 12px;
`

export { Summary, NameAndInfo, Name, Untitled, Info }
