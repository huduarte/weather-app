import React, { useEffect, useState } from 'react'

import { Alert } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import map from '@assets/map.json'

import {
  Container,
  Header,
  Title,
  Description,
  Button,
  Footer,
} from './styles'

import LargeButton from '@components/LargeButton'
import Loader from '@components/Loader'
import { getDayPeriod } from '@utils/getDayPeriod'

import WeatherAnimation from '@components/WeatherAnimation'

import { useWeather } from '@hooks/weather'

import { RoutesNames } from '@utils/enum'

import { RootStackParamList } from '@routes/stack.routes'

type MainScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

type Props = {
  navigation: MainScreenNavigationProp;
};

const Main = ({ navigation }: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)
  const [dayPeriod, setDayPeriod] = useState<'day' | 'night'>('day')
  const [startAnimation, setStartAnimation] = useState(false)

  const handlePressContinue = async () => {
    setIsLoading(true)
    await getCurrentLocation().then(() => {
      navigation.navigate(RoutesNames.HOME, {day: dayPeriod})
    }).catch(() => {
      Alert.alert('Ops!', 'Houve um problema ao carregar os dados, por favor, tente novamente!')
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const {
    getLocationPermission,
    getCurrentLocation,
  } = useWeather()


  useEffect(() => {
    const fetchData = async () => {
      await getLocationPermission()
    }

    fetchData()
    const hour = new Date().getHours()
    const dayPeriod = getDayPeriod(hour)
    setDayPeriod(dayPeriod)
    setStartAnimation(true)
  }, [])

  return (
    <Container type={dayPeriod} colors={[]}>
      {isLoading ? (
        <Loader dayPeriod={dayPeriod} />
      ) : (
        <>
          <Header>
            <Title testID="title">Bem-vindo (a)!</Title>
            <Description>Clique no botão abaixo e veja as informações sobre o clima da sua localidade</Description>
          </Header>

          {startAnimation && (
            <WeatherAnimation source={map} />
          )}

          <Button>
            <LargeButton title="Começar" type={dayPeriod} onPress={handlePressContinue} testID="main-button" />
          </Button>

          <Footer>
            <Description>Não esqueça de permitir o acesso a sua localização atual.</Description>
          </Footer>
        </>
      )}
    </Container>
  )
}

export default Main
