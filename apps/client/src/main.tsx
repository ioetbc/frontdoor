import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloProvider} from "@apollo/react-hooks";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {ChakraProvider} from "@chakra-ui/react";

import {GRAPHQL_HTTP_ENDPOINT} from "./constants";

import App from "./App";
import {RefetchProvider} from "./context/refetch-context";

const httpLink = createHttpLink({
  uri: GRAPHQL_HTTP_ENDPOINT,
});

const errorLink = onError(({graphQLErrors}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({extensions}) => {
      console.log("graphql error", extensions);
    });
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999999999;
  }
`;
document.body.appendChild(rootElement);
document.body.appendChild(globalStyles);

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <RefetchProvider>
          <App />
        </RefetchProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);
