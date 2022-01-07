import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  Title
} from './styles'

interface ILargeButtonProps extends TouchableOpacityProps {
  type: 'day' | 'night'
  title: string
}

const LargeButton = ({type, title, ...rest}: ILargeButtonProps): JSX.Element => {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </Container>
  )
}

export default LargeButton
