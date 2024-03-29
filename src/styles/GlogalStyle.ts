import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
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
    color: ${({theme}) => theme.currentTheme.colors.contrastText};

  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`
