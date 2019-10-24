import Document, { Html, Head, Main, NextScript } from 'next/document'
import Sidebar from '@/components/sidebar'

class MDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" />
          <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
        </Head>
        <body>
          <Sidebar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MDocument
