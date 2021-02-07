import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({theme}) => theme.currentTheme.colors.wrong};
  color: ${({theme}) => theme.currentTheme.colors.contrastText};
  background-color: ${({theme}) => theme.currentTheme.colors.mainBg};
  border-radius: ${({theme}) => theme.currentTheme.borderRadius};
  outline: 0;
`
