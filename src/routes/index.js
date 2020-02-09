import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './actions'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import theme, { colors } from 'theme'

import Home from 'components/Home'
import Archives from 'components/Archives'
import List from 'components/List'
import EditList from 'components/EditList'

const Stack = createNativeStackNavigator()

export default () => {
  const scheme = useColorScheme()

  return (
    <AppearanceProvider>
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
              fontFamily: 'RobotoMono-Medium',
            },
            headerBackTitleStyle: {
              fontFamily: 'RobotoMono-Medium',
            },
          }}
        >
          <Stack.Screen name="tictask" component={Home} />
          <Stack.Screen name="archives" component={Archives} />
          <Stack.Screen
            mode="modal"
            name="list"
            component={List}
            options={{
              headerTitle: '',
              headerBackTitle: 'tictask',
              headerRight: () => <EditList />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}
