import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


// import {createStore} from 'redux'
// import allReducers from '../reducers/'

// let store = createStore(allReducers);

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Component {...pageProps} />
  )
}
export default MyApp
