import styled from 'styled-components/native'

import LottieView from 'lottie-react-native'


export const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export const Animation = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  height: 200px;
  width: 200px;
`

export const Description = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`