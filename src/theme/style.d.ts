import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary: string
      secondary: string
      neutral: string
      textPrimary: string
      textSecondary: string
      success: string
      disabled: string
    }

    fonts: {
      title: string,
      primary: string
    }
  }
}