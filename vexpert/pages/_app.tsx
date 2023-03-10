import '@/styles/globals.css'

//Sass
import '@/styles/index.scss'
import '@/styles/login.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
