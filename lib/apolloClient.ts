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

const httpLink = new HttpLink({ uri: "http://localhost:3001/graphql" });
const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(createClient({ url: "ws://localhost:3001/graphql" }))
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

export const createApolloClient = (initialState: NormalizedCacheObject) => {
  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache().restore(initialState),
  });
};
