import * as React from 'react'
import '../styles/app.css'
import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorSwitcher />
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
