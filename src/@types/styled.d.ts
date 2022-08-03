import 'styled-components'
import { lightTheme } from '../styles/theme/light'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
