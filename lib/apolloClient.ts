import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  NormalizedCacheObject,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import getConfig from "next/config";

export const createApolloClient = (
  initialState: NormalizedCacheObject,
  httpUrl: string,
  wsUrl: string
) => {
  const httpLink = new HttpLink({
    uri: httpUrl,
    fetch: (input, init) => fetch(input, init),
  });
  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(createClient({ url: wsUrl }))
      : null;

  const splitLink =
    typeof window !== "undefined"
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === "OperationDefinition" &&
              definition.operation === "subscription"
            );
          },
          wsLink as GraphQLWsLink,
          httpLink
        )
      : httpLink;
  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache().restore(initialState),
  });
};
