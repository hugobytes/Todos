import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import colors from 'lib/colors';

const RootView = styled(SafeAreaView)`
  background: ${colors.content};
  flex: 1;
`;

const ContentView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const Content = styled.ScrollView`
  flex: 1;
`;

const contentStyle = {paddingTop: 6, paddingBottom: 90};

const TitleArea = styled.View`
  padding: 24px 24px 12px;
`;

const Title = styled.TextInput`
  font-family: 'Merriweather-Black';
  font-size: 20px;
`;

const AddTaskButton = styled.TouchableOpacity`
  align-items: center;
  background: ${({color}) => color};
  border-radius: 4px;
  flex-direction: row;
  margin: 0 16px 16px;
  padding: 16px 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const AddTaskText = styled.Text`
  color: #fff;
  font-family: 'Merriweather-Black';
  font-size: 16px;
  margin-left: 16px;
`;

export {
  RootView,
  ContentView,
  Content,
  contentStyle,
  TitleArea,
  Title,
  AddTaskButton,
  AddTaskText,
};
