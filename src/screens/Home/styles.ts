import styled from 'styled-components/native'

import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

type ContainerProps = LinearGradientProps & {
  type: 'day' | 'night'
}

export const Container = styled(LinearGradient).attrs<ContainerProps>(({theme, type}) => ({
  colors: type === 'day' ? theme.COLORS.DAY_GRADIENT : theme.COLORS.NIGHT_GRADIENT,
  start: {x:0.8 , y:0.1},
}))<ContainerProps>`
  flex: 1;
`
export const Header = styled.View`
  flex-direction: row;
  padding-left: 20px;
  margin-top: 25%;
  justify-content: space-between;
  align-items: center;
`

export const City = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 24px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`

export const Temp = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 72px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
`

export const Data = styled.View``

export const Description= styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.BOLD};
  font-size: 18px;
  transform: rotate(270deg);
`

export const Temperature = styled.View`
  flex-direction: row;
`

export const Celsius = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 30px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
`

export const WeatherData = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  margin-top: 20%;
`

export const Button = styled.View`
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10%;
`