import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.button`
  background-color: ${({theme}) => theme.currentTheme.colors.wrong};
  color: ${({theme}) => theme.currentTheme.colors.contrastText};
  border-radius: ${({theme}) => theme.currentTheme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({theme}) => shade(0.2, theme.currentTheme.colors.wrong)};
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`
