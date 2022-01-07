
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RoutesNames } from '@utils/enum'

import Main from '@screens/Main'
import Home from '@screens/Home'

export type RootStackParamList = {
  Main: undefined,
  Home: { day: string }; 
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackRoutes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={RoutesNames.MAIN} 
          component={Main} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name={RoutesNames.HOME} 
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackRoutes