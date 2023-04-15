import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://new-gannet-12.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "nYbfSkloaI02M6Nr5JZSdoGkERc8QiuXuG52P9UrIhZCG4X1WeMDjGvrMj26HYdg",
  },
});

export default client;