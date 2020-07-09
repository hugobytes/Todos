import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigation';

import colors from 'lib/colors';
import theme from 'lib/theme';

import Home from 'screens/Home';
import List from 'screens/List';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer ref={navigationRef} theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerHideShadow: true,
        headerStyle: {
          backgroundColor: colors.background,
          height: 100,
        },
        headerTitleStyle: {
          fontFamily: 'Merriweather-Black',
        },
        headerBackTitleStyle: {
          fontFamily: 'Merriweather-Black',
        },
      }}>
      <Stack.Screen name="Todos" component={Home} />
      <Stack.Screen
        name="list"
        component={List}
        options={{stackPresentation: 'modal'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
