import styled from 'styled-components/native'

const RootView = styled.View``

const AddTaskButton = styled.TouchableOpacity`
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 4px;
  flex-direction: row;
  margin: 16px;
  padding: 16px 20px;
`

const AddTaskText = styled.Text`
  color: #fff;
  font-family: 'RobotoMono-Medium';
  font-size: 16px;
  margin-left: 16px;
`

export { RootView, AddTaskButton, AddTaskText }
