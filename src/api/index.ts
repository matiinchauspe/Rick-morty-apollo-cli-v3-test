import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({
    // typePolicies: {
    //   Characters: {
    //     fields: {
    //       results: {
    //         keyArgs: false,
    //         merge(existing = [], incoming = []) {
    //           debugger;
    //           return [...existing, ...incoming];
    //         },
    //       },
    //     },
    //   },
    // },
  }),
  connectToDevTools: true,
});
