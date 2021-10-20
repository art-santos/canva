/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import "@fontsource/lexend/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "pages/templates";
import createEmotionCache from "app/styles/createEmotionCache";
import customTheme from "app/styles/customTheme";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
import "../app/styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    //That's our provider from redux, he controls all the global states.
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={customTheme}>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
