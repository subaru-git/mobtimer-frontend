import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import Head from "next/head";
import React from "react";
import { createApolloClient } from "./apolloClient";

let globalApolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export const initOnContext = (ctx: any) => {
  const inAppContext = Boolean(ctx.ctx);
  if (process.env.NODE_ENV === "development") {
    if (inAppContext) {
      console.warn(
        "Warning: You have opted-out of Automatic Static Query Processing! This may cause 404 errors.",
        "Read more about it here: https://www.apollographql.com/docs/react/essentials/static-query-processing/#automatic-static-query-processing"
      );
    }
  }

  const apolloClient =
    ctx.apolloClient || initApolloClient(ctx.apolloState || {});
  apolloClient.toJSON = () => null;
  ctx.apolloClient = apolloClient;
  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }
  return ctx;
};

const initApolloClient = (initialState: NormalizedCacheObject) => {
  if (typeof window === "undefined") {
    return createApolloClient(initialState);
  }
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState);
  }
  return globalApolloClient;
};

export const withApollo =
  ({ ssr = true } = {}) =>
  (PageComponent: any) => {
    const WithApollo = ({
      apolloClient,
      apolloState,
      ...pageProps
    }: {
      apolloClient: ApolloClient<NormalizedCacheObject>;
      apolloState: NormalizedCacheObject;
    }) => {
      let client;
      if (apolloClient) {
        client = apolloClient;
      } else {
        client = initApolloClient(apolloState);
      }
      return (
        <ApolloProvider client={client}>
          <PageComponent {...pageProps} />
        </ApolloProvider>
      );
    };
    if (process.env.NODE_ENV !== "production") {
      const displayName =
        PageComponent.displayName || PageComponent.name || "Component";
      WithApollo.displayName = `withApollo(${displayName})`;
    }
    if (ssr || PageComponent.getInitialProps) {
      WithApollo.getInitialProps = async (ctx: any) => {
        const { AppTree } = ctx;
        const apolloClient = (ctx.apolloClient = initApolloClient({}));
        let pageProps = {};
        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx);
        }
        if (typeof window === "undefined") {
          if (ctx.res && ctx.res.finished) {
            return pageProps;
          }
          if (ssr) {
            try {
              const { getDataFromTree } = await import(
                "@apollo/client/react/ssr"
              );
              await getDataFromTree(
                <AppTree
                  pageProps={{
                    ...pageProps,
                    apolloClient,
                  }}
                />
              );
            } catch (error) {
              console.error("Error while running `getDataFromTree`", error);
            }
          }
        }
        const apolloState = apolloClient.cache.extract();
        return {
          ...pageProps,
          apolloState,
        };
      };
    }
    return WithApollo;
  };
