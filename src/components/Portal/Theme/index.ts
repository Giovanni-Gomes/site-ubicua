import { extendTheme } from "@chakra-ui/react";
import { TextStyles as Text } from '../../Portal/Common/TextStyles'
import { rgba } from "polished";

export const defaultColors = {
  bgPrimary: '#FFFFFF',
  bgSecondary: '#8C30F5',
  bgPortal: '#EFF6FF',
  dark: '#232323',
  primary: '#FFFFFF',
  secondary: '#8C30F5',
  tertiary: '#FFFFFF',//'#D5FAFC',
  quaternary: '#2EC5CE',
  footer: '#0B0D17',
  black: '#0B0D17',
  border: '#BDC4C9',
  login: '#df35e6',
  hoverLight: rgba(140, 48, 245, 0.5),
  hoverDark: rgba(46, 197, 206, 0.5),
}

export const lightTheme = {
  body: defaultColors.primary,
  portal: defaultColors.bgPortal,
  background: defaultColors.primary,
  navBar: defaultColors.tertiary,
  textPrimary: defaultColors.dark,
  textSecondary: defaultColors.secondary,
  hover: defaultColors.hoverDark,
}
export const darkTheme = {
  body: defaultColors.dark,
  portal: defaultColors.dark,
  background: defaultColors.dark,
  navBar: defaultColors.secondary,
  textPrimary: defaultColors.primary,
  textSecondary: defaultColors.secondary,
  hover: defaultColors.hoverDark,
}

const customTheme = {

  colors: {
    primary: '#FFFFFF',
    secondary: '#8C30F5',
    tertiary: '#EFF6FF',
    quaternary: '#2EC5CE',
    footer: '#0B0D17',
    dark: '#232323',
    black: '#0B0D17',
    border: '#BDC4C9',
    login: '#df35e6',
    hoverLight: rgba(140, 48, 245, 0.5),
    hoverDark: rgba(46, 197, 206, 0.5),
    darkTheme,
    lightTheme,
  },
  components: {
    Text,
  }

}

export const newTheme = extendTheme(customTheme);
