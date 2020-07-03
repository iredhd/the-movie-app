import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import {
  Home, Details
} from '../pages'

const Stack = createStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(107, 210, 119)',
    background: 'rgba(10, 28, 36, 0.2)',
    text: 'rgb(10, 28, 36)'
  }
}

const HeaderStyle = {
  headerStyle: {
    backgroundColor: 'rgb(10, 28, 36)'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white'
  }
}

const Router = () => (
  <NavigationContainer
    theme={MyTheme}
  >
    <Stack.Navigator
      initialRouteName='Home'
      gestureEnabled={false}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={HeaderStyle}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={HeaderStyle}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router
