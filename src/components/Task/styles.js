import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { colors } from 'theme'

const width = Dimensions.get('window').width

const RootView = styled.ScrollView`
  border-radius: 8px;
  flex-direction: row;
  margin: 4px 16px;
`

const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  background: #ec4d4d;
  justify-content: center;
  padding: 2px 0 0 4px;
  width: 64px;
`

const Task = styled.View`
  align-items: center;
  background: #e6e8ee;
  flex-direction: row;
  padding: 12px;
  width: ${width - 32}px;
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
  border-radius: 12px;
  height: 24px;
  justify-content: center;
  margin-right: 12px;
  width: 24px;
`

export { RootView, DeleteButton, Task, NameWrapper, Name, Checkbox }
