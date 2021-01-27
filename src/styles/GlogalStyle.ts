import {createGlobalStyle} from 'styled-components'

interface IProps {
  backgroundImage: string
}

export default createGlobalStyle<IProps>`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({theme}) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;

    display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-color: ${({theme}) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({theme}) => theme.colors.mainBg}
        ),
        url(${({backgroundImage}) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
  }

`
