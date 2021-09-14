import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Inbox" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Inbox App" />
          <meta name="description" content="This is a inbox app" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="theme-color"
            content="#EDF2F7"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#171923"
            media="(prefers-color-scheme: dark)"
          />
          <link rel="apple-touch-icon" sizes="512x512" href="/InboxIcon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/InboxIcon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
