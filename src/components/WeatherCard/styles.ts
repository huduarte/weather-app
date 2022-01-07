import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: 'rgba(0, 0, 0, 0.2)';
  border-radius: 30px;
  border: 2px;
  border-color: ${({theme}) => theme.COLORS.TITLE};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Content = styled.View`
  align-items: center;
`
export const ContentValue = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.BOLD};
  font-size: 18px;
  margin-bottom: 2px;
`

export const ContentText = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: 16px;
`

export const Line = styled.View`
  width: 0.5px;
  height: 25px;
  background-color: ${({theme}) => theme.COLORS.TITLE};
`