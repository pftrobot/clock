import '@emotion/react'

import theme from '.'

type ExtendedTheme = typeof theme

declare module '@emotion/react' {
    interface Theme extends ExtendedTheme {}
}
