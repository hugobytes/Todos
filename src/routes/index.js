import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'components/Home'
import Archives from 'components/Archives'
import List from 'components/List'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="archives"
      component={Archives}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen
      mode="modal"
      name="list"
      component={List}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
)
