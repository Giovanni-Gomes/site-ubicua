import { extendTheme } from "@chakra-ui/react";
import { rgba } from "polished";
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const primaryTheme = {
  title: 'light',
  colors: {
    primary: '#660066',
    secondary: '#300047',
    tertiary: '#eabfff',
    quaternary: '#d580ff',
    white: '#ffffff',
    grey: '#dbd5d5',
    hoverLight: rgba(102, 0, 102, 0.5),
    hoverDark: rgba(48, 0, 71, 0.5),
  },
  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',
}


export const defaultTheme = extendTheme(primaryTheme);

//export const darkTheme = extendTheme(secondaryTheme);


// export const defaultTheme = {
//   white: '#FFF',
//   'primary': '#00B37E',

//   'gray-100': '#E1E1E6',
//   'gray-300': '#C4C4CC',
//   'gray-400': '#8D8D99',
//   'gray-500': '#7C7C8A',
//   'gray-600': '#323238',
//   'gray-700': '#29292E',
//   'gray-800': '#202024',
//   'gray-900': '#121214',

//   'green-300': '#00B37E',
//   'green-500': '#00875F',
//   'green-700': '#015F43',

//   'red-500': '#AB222E',
//   'red-700': '#7A1921',

//   'yellow-500': '#FBA94C',
// };
