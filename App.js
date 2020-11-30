import React from 'react';
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import { AppRegistry } from "react-native";
import Root from './components/root';

const client = new ApolloClient({
  uri : "https://graphqlzero.almansi.me/api",
  cache : new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client} >
      <Root />
    </ApolloProvider>
  );
}


AppRegistry.registerComponent("My Application ", () => App )