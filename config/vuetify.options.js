import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('awroraDarkMode') || false
}

const palette = {
  leaf: {
    primary: colors.green.accent4, // primary main
    primarylight: colors.green.lighten1, // primary light
    primarydark: colors.green.darken3, // primary dark
    secondary: colors.blue.darken1, // secondary main
    secondarylight: colors.blue.base, // secondary light
    secondarydark: colors.blue.darken4, // secondary dark
    accent: colors.yellow.darken1, // accent main
    accentlight: colors.yellow.lighten4, // accent light
    accentdark: colors.yellow.darken4, // accent dark
    anchor: colors.brown.base // link
  }
}

export const theme = {
  ...palette.leaf
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
