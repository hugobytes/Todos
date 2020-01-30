import styled from 'styled-components/native'
import SafeAreaView from 'react-native-safe-area-view'

const RootView = styled(SafeAreaView)`
  background: #faf3f1;
  flex: 1;
`

const Title = styled.Text`
  color: #000;
  font-size: 13px;
`

export { RootView, Title }
