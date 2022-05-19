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

const httpLink = new HttpLink({
  uri: process.env.SERVER_HTTP_URL,
  fetch: (input, init) => {
    const body = init?.body && JSON.parse(init.body.toString());
    // const operations = body.map((ops: any) => ops.operationName);

    console.log({
      startTime: new Date(),
      url: input,
      method: init?.method,
      body,
    });
    return fetch(input, init);
  },
});
const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(createClient({ url: process.env.SERVER_WS_URL ?? "" }))
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
