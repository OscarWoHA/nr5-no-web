import { AppProps } from 'next/app'
import '../styles/globals.css'

const NoFiveApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default NoFiveApp
