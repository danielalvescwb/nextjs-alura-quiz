import styled from 'styled-components'

export const Wrapper = styled.a`
  position: absolute;
  height: 80px;
  width: 80px;
  top: 0;
  border: 0;
  right: 0;
  z-index: 20;
`

export const SVGWrapper = styled.svg`
  fill: ${({theme}) => theme.currentTheme.colors.wrong};
  color: ${({theme}) => theme.currentTheme.colors.contrastText};
  cursor: pointer;
  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover .octo-arm {
      animation: none;
    }
    & .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`
