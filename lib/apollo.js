import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://52.25.189.47/graphql',
    cache: new InMemoryCache(),
});