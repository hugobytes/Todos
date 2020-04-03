import styled from 'styled-components/native'
import { colors } from 'theme'

const Task = styled.TouchableOpacity`
  align-items: center;
  background: #fff;
  border-bottom-width: 1px;
  border-color: ${colors.background};
  flex-direction: row;
  padding: 16px;
`

const Name = styled.TextInput`
  color: ${colors.text};
  font-family: 'RobotoMono-Medium';
  font-size: 14px;
`

const Checkbox = styled.TouchableOpacity`
  align-content: center;
  align-items: center;
  background: ${({ completed }) => (completed ? '#4e3ec8' : '#e6e9ef')};
  border-radius: 8px;
  height: 24px;
  justify-content: center;
  margin-right: 16px;
  width: 24px;
`

export { Task, Name, Checkbox }
