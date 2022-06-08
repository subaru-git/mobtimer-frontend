import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createApolloClient } from "../lib/apolloClient";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";
import Meta from "../components/pages/Meta";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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

  return (
    <ChakraProvider>
      <ApolloProvider client={createApolloClient({})}>
        <Meta />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
