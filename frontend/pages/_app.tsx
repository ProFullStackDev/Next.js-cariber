import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script src="https://kit.fontawesome.com/1b1fb3f1fb.js" crossOrigin="anonymous"></Script>
      <Head>
        <title>Cariber</title>
        <link rel = "icon" href ="/title-icon.png" type = "image/x-icon"></link>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}

export default MyApp