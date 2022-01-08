import { renderHook } from '@testing-library/react-hooks'
import { WeatherProvider, useWeather } from '@hooks/weather'

import MockAdapter from 'axios-mock-adapter'
import { api } from '@services/api'

const apiMock = new MockAdapter(api)

jest.mock('expo-location', () => {
  return {
    getCurrentPositionAsync: () => {
      return {
        coords: {
          latitude: -100,
          longitude: -230
        }
      }
    },
    watchPositionAsync: () => {
      return {
        bind: () => {
          return null
        }
      }
    }
  }
})
 
describe('Weather Hook', () => {
  it('should be able to getCurrentLocation', async () => {
    const pathRegex = new RegExp('/data\/2.5\/*')
    apiMock.onGet(pathRegex).reply(200, {
      weather: [
        {
          id: 800,
          description: 'céu limpo',
        }
      ],
      main: {
        temp: 273.15,
        pressure: 1000,
        humidity: 27
      },
      wind: {
        speed: 1.2,
      },
      name: 'Salvador',
    })
    const { result, waitForNextUpdate } = renderHook(() => useWeather(), {wrapper: WeatherProvider})

    result.current.getCurrentLocation()

    await waitForNextUpdate()

    expect(result.current.weatherData).toBeTruthy()
  })

  it('should be able to update data', async () => {
    const pathRegex = new RegExp('/data\/2.5\/*')
    apiMock.onGet(pathRegex).reply(200, {
      weather: [
        {
          id: 800,
          description: 'céu limpo',
        }
      ],
      main: {
        temp: 273.15,
        pressure: 1000,
        humidity: 27
      },
      wind: {
        speed: 1.2,
      },
      name: 'Salvador',
    })
    const { result, waitForNextUpdate } = renderHook(() => useWeather(), {wrapper: WeatherProvider})

    result.current.updateWeatherData()

    await waitForNextUpdate()

    expect(result.current.weatherData).toBeTruthy()
  })

})