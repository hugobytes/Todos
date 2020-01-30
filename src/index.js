import React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { navigationRef } from 'routes/actions'
import AppRoutes from 'routes'

export default () => {
  enableScreens()
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <AppRoutes />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
