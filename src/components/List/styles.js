import styled from 'styled-components/native'
import { colors } from 'theme'

const RootView = styled.View`
  background: ${colors.content};
  flex: 1;
`

const Content = styled.ScrollView`
  flex: 1;
`

const contentStyle = { paddingTop: 16 }

const TitleArea = styled.View`
  padding: 24px;
`

const Title = styled.TextInput`
  font-family: 'Merriweather-Black';
  font-size: 20px;
`

const SpaceTaker = styled.View`
  flex: 1;
`

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
  font-family: 'Merriweather-Black';
  font-size: 16px;
  margin-left: 16px;
`

export {
  RootView,
  Content,
  contentStyle,
  TitleArea,
  Title,
  AddTaskButton,
  SpaceTaker,
  AddTaskText,
}
