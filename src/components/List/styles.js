import styled from 'styled-components/native'

const RootView = styled.View`
  flex: 1;
`

const Content = styled.ScrollView`
  flex: 1;
`

const contentStyle = { flex: 1, paddingTop: 16 }

const TitleArea = styled.View`
  background: #fff;
  padding: 24px;
`

const Title = styled.TextInput`
  font-family: 'OpenSans-Bold';
  font-size: 20px;
`

export { RootView, Content, contentStyle, TitleArea, Title }
