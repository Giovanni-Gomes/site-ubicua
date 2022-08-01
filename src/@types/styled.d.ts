import 'styled-components'
import { primaryTheme } from '../styles/themes/light';
import { secondaryTheme } from '../styles/themes/dark';
//import { primaryTheme } from '../styles/themes/default';
// import { secondaryTheme } from '../styles/themes/default';


type ThemeType = typeof primaryTheme
type ThemeDarkType = typeof secondaryTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
  //export interface ThemeDarkType extends ThemeType { }
}
