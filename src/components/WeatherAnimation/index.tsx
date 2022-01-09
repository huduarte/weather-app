import React, { useEffect, useRef } from 'react'

import { Container, Description, Animation } from './styles'

import LottieView from 'lottie-react-native'

import { AnimatedObject } from '@utils/resolvers'

interface IWeatherAnimationProps {
  source: string | AnimatedObject | {
    uri: string;
  }
  description?: string
}

const WeatherAnimation = ({ source, description }: IWeatherAnimationProps): JSX.Element => {
  const animationRef = useRef<LottieView | null>()

  useEffect(() => {
    animationRef.current?.play()
  }, [])

  return (
    <Container>
      <Animation testID="weather-animation" source={source} autoPlay={true} loop={true} ref={(animation) => {animationRef.current = animation}}  />
      {description && <Description>{description}</Description>}
    </Container>
  )
}

export default WeatherAnimation
