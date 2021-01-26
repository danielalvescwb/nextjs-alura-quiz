import styled from 'styled-components'
import {transparentize} from 'polished'

export const FooterWrapper = styled.footer`
  background-color: ${({theme}) => transparentize(0.3, theme.colors.mainBg)};
  padding: 20px;
  display: flex;
  align-items: center;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`
