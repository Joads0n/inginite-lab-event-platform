import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7xbk10yv301xr2ubwh3f9/master',
    cache: new InMemoryCache()
})