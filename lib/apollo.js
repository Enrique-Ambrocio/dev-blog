import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://blog.enriqueambrocio.io/graphql',
    cache: new InMemoryCache(),
});