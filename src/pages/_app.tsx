import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/GlogalStyle'

import {theme} from '../data/db.json'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
