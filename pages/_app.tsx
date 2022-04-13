import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { createApolloClient } from "../lib/apolloClient";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={createApolloClient({})}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
