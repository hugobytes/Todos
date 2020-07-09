import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {colors} from 'theme';

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
