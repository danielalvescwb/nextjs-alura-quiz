import 'styled-components'
interface ITheme {
  colors: {
    primary: string
    secondary: string
    mainBg: string
    contrastText: string
    wrong: string
    success: string
  }
  borderRadius: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    currentTheme: ITheme
    bg?: string
  }
}
