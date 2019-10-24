import App from "next/app"
import { Provider } from 'react-redux'
import { appWithTranslation } from "@/i18n"
import store from "@/store"

import "@/static/css/reset.less"

class MApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
}

export default appWithTranslation(MApp)