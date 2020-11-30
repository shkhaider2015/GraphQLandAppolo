import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import Root from './components/root';

const clint = new ApolloClient({
  uri : "https://graphqlzero.almansi.me/api",
  cache : new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={clint} >
      <Root />
    </ApolloProvider>
  );
}


