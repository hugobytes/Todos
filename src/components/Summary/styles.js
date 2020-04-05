import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { colors } from 'theme'

const width = Dimensions.get('window').width

const RootView = styled.ScrollView`
  border-radius: 8px;
  flex-direction: row;
  margin: 8px 0;
`

const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  background: red;
  justify-content: center;
  padding: 2px 0 0 4px;
  width: 56px;
`

const Summary = styled.TouchableOpacity`
  align-items: center;
  background: #fff;
  flex-direction: row;
  padding: 16px;
  width: ${width - 32}px;
`

const NameAndInfo = styled.View`
  justify-content: center;
  margin-left: 16px;
`

const Name = styled.Text`
  color: ${colors.text};
  font-family: 'OpenSans-Bold';
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

export { RootView, Summary, DeleteButton, NameAndInfo, Name, Untitled, Info }
