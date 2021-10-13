import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const getErrorsLogs = (errorsArray: any) => errorsArray.map(({ message } : { message: any }) => console.log(message));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors ? getErrorsLogs(graphQLErrors) : alert(networkError);
})

const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://localhost:5000/graphiql',
    fetchOptions: {
      mode: 'no-cors',
    }
  })
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
}); 