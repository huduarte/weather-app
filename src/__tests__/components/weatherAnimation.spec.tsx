import React from 'react'
import WeatherAnimation from '@components/WeatherAnimation'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import source from '@assets/day.json'

import { render } from '@testing-library/react-native'

const Providers: React.FC = ({children}) => (
  <ThemeProvider theme={theme} >
    { children }
  </ThemeProvider>
)

describe('WeatherAnimation Component', () => {
  it('animation view should have prop autoPlay true', () => {
    const { getByTestId } = render(<WeatherAnimation source={source} />, {wrapper: Providers}) 
      
    const animation = getByTestId('weather-animation')
    
    expect(animation.props.autoPlay).toBeTruthy()

  })
})


