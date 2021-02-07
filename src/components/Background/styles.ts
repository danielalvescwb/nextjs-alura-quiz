import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  background-color: ${({theme}) => theme.currentTheme.colors.mainBg};

  @media screen and (max-width: 500px) {
    &:after {
      content: '';
      background-image: linear-gradient(
        transparent,
        ${({theme}) => theme.currentTheme.colors.mainBg}
      );
      display: block;
      width: 100%;
      height: 275px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
    }
  }
`
