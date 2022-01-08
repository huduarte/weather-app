import React from 'react'
import Main from '@screens/Main'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { fireEvent, render } from '@testing-library/react-native'

const Providers: React.FC = ({children}) => (
  <ThemeProvider theme={theme} >
    { children }
  </ThemeProvider>
)

describe('Main Screen', () => {
  it('loading text should appear when start button is pressed', () => {
    const { getByTestId, getByText } = render(<Main navigation={undefined} />, {wrapper: Providers}) 
  
    const button = getByTestId('main-button')
  
    fireEvent.press(button)
  
    expect(getByText('Buscando por informações, só um instante!')).toBeTruthy()
  })
})
