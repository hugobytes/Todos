import styled from 'styled-components/native'
import { colors } from 'theme'

const Task = styled.View`
  align-items: center;
  background: #e6e8ee;
  border-radius: 8px;
  flex-direction: row;
  margin: 8px 16px;
  padding: 12px;
`

const NameWrapper = styled.View`
  flex: 1;
  margin-top: -8px;
  opacity: ${({ completed }) => (completed ? 0.5 : 1)};
`

const Name = styled.TextInput`
  color: ${colors.text};
  font-family: 'RobotoMono-Medium';
  font-size: 14px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`

const Checkbox = styled.TouchableOpacity`
  align-content: center;
  align-items: center;
  background: ${({ completed, color }) => (completed ? color : colors.border)};
  border-radius: 8px;
  height: 24px;
  justify-content: center;
  margin-right: 12px;
  width: 24px;
`

export { Task, NameWrapper, Name, Checkbox }
