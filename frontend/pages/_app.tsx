import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <script src="https://kit.fontawesome.com/1b1fb3f1fb.js" crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </React.Fragment>
  )
}

export default MyApp
