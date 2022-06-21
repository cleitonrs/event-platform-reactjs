import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oihauw0eu101w7ad711263/master',
  cache: new InMemoryCache()
})