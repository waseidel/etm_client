import { ApolloClient, ApolloProvider as Apollo, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import App from '../../../App';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const clien = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const ApolloProvider = () => (
  <Apollo client={clien} >
    <App />
  </Apollo>
)

export default ApolloProvider;
