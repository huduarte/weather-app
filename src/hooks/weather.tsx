import React, { createContext, useContext, ReactNode, useState } from 'react'

import * as Location from 'expo-location'

import { api } from '@services/api'
import { Alert } from 'react-native'
import { useCallback } from 'react'

type WeatherData = {
  weather: [
    {
      id: number,
      main: string,
      description: string,
    }
  ],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  name: string,
  cod: number
}

type WeatherContextData = {
  getLocationPermission: () => Promise<void>
  getCurrentLocation: () => Promise<void>
  updateWeatherData: () => Promise<void>
  weatherData: WeatherData | undefined
}

type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherContext = createContext({} as WeatherContextData)

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [weatherData, setWeatherData] = useState()

  const getLocationPermission = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      return Alert.alert('Permissão negada', 'As permissões de localização precisam estar ativas para começarmos')
    }
  }, [])

  const getCurrentLocation = useCallback(async () => {
    try {
      const location = await Location.getCurrentPositionAsync({})
      Location.watchPositionAsync.bind(null, {})

      const response = await api
        .get(`/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=bb7a79925b6a3ce62d23591cff48db10`)
      setWeatherData(response.data)
    } catch (error) {
      console.log(error)
      throw new Error('Erro ao buscar dados')
    }
  }, [])

  const updateWeatherData = useCallback(async () => {
    setWeatherData(undefined)

    try {
      const location = await Location.getCurrentPositionAsync({})
      Location.watchPositionAsync.bind(null, {})
      const response = await api
        .get(`/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=bb7a79925b6a3ce62d23591cff48db10`)
      setWeatherData(response.data)
    } catch {
      throw new Error('Erro ao buscar dados')
    }
  }, [])

  return (
    <WeatherContext.Provider 
      value={{
        getLocationPermission, 
        getCurrentLocation, 
        updateWeatherData, 
        weatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

const useWeather = () => {
  const context = useContext(WeatherContext)

  return context
}

export { useWeather, WeatherProvider }
