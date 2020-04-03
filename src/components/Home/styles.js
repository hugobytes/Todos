import styled from 'styled-components/native'

const RootView = styled.View`
  flex: 1;
  padding: 16px;
`

const Content = styled.ScrollView`
  flex: 1;
`

const NewListButton = styled.TouchableOpacity`
  align-items: center;
  background: #1b1a23;
  border-radius: 4px;
  flex-direction: row;
  padding: 16px 20px;
`

const NewListText = styled.Text`
  color: #fff;
  font-family: 'RobotoMono-Medium';
  font-size: 16px;
  margin-left: 16px;
`

export { RootView, Content, NewListButton, NewListText }
