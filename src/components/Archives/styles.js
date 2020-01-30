import styled from 'styled-components/native'
import SafeAreaView from 'react-native-safe-area-view'

const RootView = styled(SafeAreaView)`
  flex: 1;
`

const Title = styled.Text`
  color: #fff;
  font-size: 13px;
`

export { RootView, Title }
