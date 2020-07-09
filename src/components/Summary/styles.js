import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import colors from 'lib/colors';

const width = Dimensions.get('window').width;

const RootView = styled.ScrollView`
  border-radius: 8px;
  flex-direction: row;
  margin: 8px 0;
`;

const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.delete};
  justify-content: center;
  padding: 2px 0 0 4px;
  width: 64px;
`;

const Summary = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.content};
  flex-direction: row;
  padding: 16px;
  width: ${width - 32}px;
`;

const NameAndInfo = styled.View`
  justify-content: center;
  margin-left: 16px;
`;

const Name = styled.Text`
  color: ${colors.text};
  font-family: 'Merriweather-Black';
  font-size: 18px;
`;

const Untitled = styled(Name)`
  opacity: 0.5;
`;

const Info = styled.Text`
  color: ${colors.text_detail};
  font-family: 'Merriweather-Regular';
  font-size: 14px;
`;

export {RootView, Summary, DeleteButton, NameAndInfo, Name, Untitled, Info};
