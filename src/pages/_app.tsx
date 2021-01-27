import Head from 'next/head'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/GlogalStyle'

import {theme, bg} from '../data/db.json'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle backgroundImage={bg} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
