import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createApolloClient } from "../lib/apolloClient";
import Meta from "../components/pages/Meta";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <ApolloProvider client={createApolloClient({})}>
        <Meta />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}
