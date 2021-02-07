import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/GlogalStyle'
import {theme, bg} from '../data/db.json'
import {HooksProvider} from '../hooks'
import Background from '../components/Background'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({Component, pageProps}) {
  const t = {
    currentTheme: theme,
    bg,
  }
  return (
    <>
      <ThemeProvider theme={t}>
        <GlobalStyle />
        <HooksProvider>
          <Background alt="backgound" src="/background.png" />
          <Component {...pageProps} />
        </HooksProvider>
      </ThemeProvider>
    </>
  )
}
