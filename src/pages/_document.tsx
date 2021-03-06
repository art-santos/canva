/* eslint-disable react/jsx-props-no-spreading */
/**
 * @todo: remove this comment below when ready
 * ref: https://github.com/vercel/next.js/issues/13712#issuecomment-910409023
 * */
import createEmotionServer from "@emotion/server/create-instance";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import * as React from "react";

import createEmotionCache from "app/styles/createEmotionCache";

const APP_NAME = "MY APP";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();

    //emotion cache is what guarantees that we are going to have a minified css and js. Also the responsible for storing
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) => (props) =>
          <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }
  //Here we are controling our browser props and making sure everything is working for every user
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}
          <link rel="manifest" href="/manifest.json" />
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
