import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6ku230thw01xx1j7e45t9/master',
    cache: new InMemoryCache()
})