import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/GlobalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
      <div id="overlay" />
    </>
  )
}

export default App
