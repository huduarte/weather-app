import React from 'react'

import dayAnimation from '@assets/day.json'
import nightAnimation from '@assets/night.json'

import WeatherAnimation from '../WeatherAnimation'

import {
  Container,
  Description,
} from './styles'

interface ILoaderProps {
  dayPeriod: 'day' | 'night'
}

const Loader = ({dayPeriod}: ILoaderProps): JSX.Element => {
  return (
    <Container>
      <WeatherAnimation source={dayPeriod === 'day' ? dayAnimation : nightAnimation} />
      <Description>Buscando por informações, só um instante!</Description>
    </Container>
  )
}

export default Loader
