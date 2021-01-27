import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.contrastText};
  background-color: ${({theme}) => theme.colors.mainBg};
  border-radius: ${({theme}) => theme.borderRadius};
  outline: 0;
  margin: 25px 0;
`
