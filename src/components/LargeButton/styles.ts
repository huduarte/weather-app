import styled from 'styled-components/native'

type Props= {
  type: 'day' | 'night'
}

export const Container = styled.TouchableOpacity<Props>`
  height: 60px;
  width: 100%;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.TITLE};

`

export const Title = styled.Text<Props>`
  color: ${({theme, type}) => type === 'day' ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY};
  font-family: ${({theme}) => theme.FONTS.BOLD};
  font-size: 16px;
`