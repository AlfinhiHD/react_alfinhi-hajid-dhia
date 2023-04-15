// Remove the apollo-boost import and change to this:
import { ApolloClient } from '@apollo/client';
import { split } from '@apollo/client';
// Setup the network "links"
import { WebSocketLink } from '@apollo/client/link/ws';
import { HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { InMemoryCache } from '@apollo/client';


const httpLink = new HttpLink({
  uri: "https://new-gannet-12.hasura.app/v1/graphql", // use https for secure endpoint
  headers: {
    "x-hasura-admin-secret":
      "nYbfSkloaI02M6Nr5JZSdoGkERc8QiuXuG52P9UrIhZCG4X1WeMDjGvrMj26HYdg",
  },
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: "wss://new-gannet-12.hasura.app/v1/graphql", // use wss for a secure endpoint
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "nYbfSkloaI02M6Nr5JZSdoGkERc8QiuXuG52P9UrIhZCG4X1WeMDjGvrMj26HYdg",
      }
    }
  },
});

const splitLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
)
  
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  

});

export default client;