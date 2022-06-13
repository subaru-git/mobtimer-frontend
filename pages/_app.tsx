import { useEffect } from "react";
import type { AppContext, AppProps } from "next/app";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createApolloClient } from "../lib/apolloClient";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";
import Meta from "../components/common/Meta";
import getConfig from "next/config";
import App from "next/app";
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  console.log("render MyApp", pageProps);

  return (
    <ChakraProvider>
      <ApolloProvider
        client={createApolloClient({}, pageProps.httpUrl, pageProps.wsUrl)}
      >
        <Meta />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  console.log("getInitialProps http", process.env.SERVER_HTTP_URL);
  console.log("getInitialProps ws", process.env.SERVER_WS_URL);
  console.log(
    "getInitialProps http public",
    publicRuntimeConfig.NEXT_PUBLIC_SERVER_HTTP_URL
  );
  console.log(
    "getInitialProps ws public",
    publicRuntimeConfig.NEXT_PUBLIC_SERVER_WS_URL
  );
  appProps.pageProps.httpUrl = process.env.SERVER_HTTP_URL;
  appProps.pageProps.wsUrl = process.env.SERVER_WS_URL;
  console.log("getInitialProps appProps", appProps);
  return { ...appProps };
};

export default MyApp;
