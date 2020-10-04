import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import NextApp from 'next/app'
import '../styles/globals.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
