import styled from 'styled-components/native'

const RootView = styled.View`
  flex: 1;
  padding: 0 16px 16px;
`

const Content = styled.ScrollView`
  flex: 1;
`

const contentStyle = {
  paddingBottom: 16,
  paddingTop: 16,
}

const NewListButton = styled.TouchableOpacity`
  align-items: center;
  background: #1b1a23;
  border-radius: 4px;
  flex-direction: row;
  padding: 16px 20px;
`

const NewListText = styled.Text`
  color: #fff;
  font-family: 'Merriweather-Black';
  font-size: 16px;
  margin-left: 16px;
`

export { RootView, Content, contentStyle, NewListButton, NewListText }
