import React from 'react'

import { StatusBar } from 'expo-status-bar'

import AppLoading from 'expo-app-loading'
import {useFonts, Lato_400Regular, Lato_700Bold} from '@expo-google-fonts/lato'

import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

import { WeatherProvider } from '@hooks/weather'

import StackRoutes from '@routes/stack.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <WeatherProvider>
        <StackRoutes />
      </WeatherProvider>
    </ThemeProvider>
  )
}
