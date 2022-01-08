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
  justify-content: space-around;
`

export const Header = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 38px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
`

export const Description = styled.Text`
  padding-top: 10px;
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`

export const Button = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`

export const Footer = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`