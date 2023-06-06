import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { indigo, blue, purple } from '@mui/material/colors'

// SETTINGS
const palette = {
  type: ('light'),
  primary: indigo,
  secondary: blue,
  tertiary: purple,
  light: 'hsl(0, 0%, 100%)',
  dark: 'hsl(0, 0%, 10%)'
}

const primary = {
  light: palette.primary[200],
  main: palette.primary[300],
  dark: palette.primary[500],
  surface: palette.primary[50]
}
const secondary = {
  light: palette.secondary[200],
  main: palette.secondary[300],
  dark: palette.secondary[600],
  surface: palette.secondary[50]
}
const tertiary = {
  light: palette.tertiary[100],
  main: palette.tertiary[200],
  dark: palette.tertiary[300],
  surface: palette.tertiary[50]
}

const gradient = {
  light: `linear-gradient(120deg, ${secondary.light} 0%, ${tertiary.light} 100%)`,
  main: `linear-gradient(120deg, ${secondary.main} 0%, ${tertiary.main} 100%)`,
  dark: `linear-gradient(120deg, ${secondary.dark} 0%, ${tertiary.dark} 100%)`,
  surface: `linear-gradient(120deg, ${secondary.surface} 0%, ${tertiary.surface} 100%)`
}

const theme = createTheme({
  palette: {
    primary: {
      light: primary.light,
      main: primary.main,
      dark: primary.dark,
      surface: primary.surface,
      contrastText: '#F5F5F5'
    },

    secondary: {
      light: secondary.light,
      main: secondary.main,
      dark: secondary.dark,
      surface: secondary.surface,
      contrastText: '#F5F5F5'
    },

    tertiary: {
      light: tertiary.light,
      main: tertiary.main,
      dark: tertiary.dark,
      surface: tertiary.surface,
      contrastText: '#F5F5F5'
    },

    light: {
      main: '#FFFFFF',
      contrastText: '#222222'
    },

    dark: {
      light: '#444444',
      main: '#222222',
      contrastText: '#F5F5F5'
    },

    neutral: {
      main: '#F5F5F5',
      dark: '#E5E5E5',
      contrastText: '#222222'
    }
  },

  gradient: {
    light: gradient.light,
    main: gradient.main,
    dark: gradient.dark,
    surface: gradient.surface
  }
})

export default responsiveFontSizes(theme)
