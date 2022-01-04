import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script src="https://kit.fontawesome.com/1b1fb3f1fb.js" crossOrigin="anonymous"></Script>
      <div>
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}

export default MyApp