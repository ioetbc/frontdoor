import {ApolloProvider} from "@apollo/react-hooks";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {GRAPHQL_ENDPOINT} from "./constants";

import {Home} from "./components/home";

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

function App() {
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

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
