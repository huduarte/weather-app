import React from 'react'

import { Container, Description, Animation } from './styles'

import { AnimatedObject } from '@utils/resolvers'

interface IWeatherAnimationProps {
  source: string | AnimatedObject | {
    uri: string;
  }
  description?: string
}

const WeatherAnimation = ({ source, description }: IWeatherAnimationProps): JSX.Element => {
  return (
    <Container>
      <Animation source={source} />
      {description && <Description>{description}</Description>}
    </Container>
  )
}

export default WeatherAnimation
