import React from 'react'

import {
  Container,
  Content,
  ContentText,
  ContentValue,
  Line,
} from './styles'

interface IWeatherCardProps {
  windSpeed: number
  pressure: number
  humidity: number
}

const WeatherCard = ({ humidity, pressure, windSpeed }: IWeatherCardProps): JSX.Element => {
  return (
    <Container>

      <Content>
        <ContentValue>{humidity}%</ContentValue>
        <ContentText>Umidade</ContentText>
      </Content>

      <Line />
      
      <Content>
        <ContentValue>{pressure}</ContentValue>
        <ContentText>Pressão</ContentText>
      </Content>

      <Line />
      
      <Content>
        <ContentValue>{windSpeed} m/s</ContentValue>
        <ContentText>Vel. vento</ContentText>
      </Content>
    </Container>
  )
}

export default WeatherCard
