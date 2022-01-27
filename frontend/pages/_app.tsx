import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Script from 'next/script'
import Head from 'next/head'

function SafeHydrate({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script src="https://kit.fontawesome.com/bce3f035e8.js" crossOrigin="anonymous" />
      <Head>
        <title>Cariber</title>
        <link rel="icon" href="/title-icon.png" type="image/x-icon"></link>
      </Head>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </React.Fragment>
  )
}

export default MyApp